import React, {useState} from 'react';
import { TextInput, Text, SafeAreaView, TouchableOpacity, View, FlatList, Alert } from 'react-native';

import { styles } from './style';
import Participant from '../../components/participant';


export default function Home() {
  const [participantes, setParticipantes] = useState<string[]>([]);
  const [participanteName, setParticipantesName] = useState('');



  const handleParticipantAdd = () => {
    if(participantes.includes(participanteName)){
        return Alert.alert('Adicionar participante', 'Deseja confirma a participação desse convidado?', [
        {
          text: 'Sim',
          style: 'default'
        },
        {
          text: 'Não',
          style:'cancel'
        }
      ])
    }

    setParticipantes(prevState => [...prevState, participanteName])
    setParticipantesName('');
  }

  const handleParticipantRemove = (name: string) => {
    Alert.alert("Remover", `Deseja remover o participante ${name}`, [
      {
        text: 'Sim',
        onPress: () => setParticipantes(prevState => prevState.filter(participantes => participantes !== name))
      },
      {
        text: 'Não',
        style: 'cancel'
      }
    ])
  }


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Nome do evento</Text>
      <Text style={styles.name}>Sexta, 25 de Janeiro 2024</Text>

      <View style={styles.form}>
        <TextInput
          placeholder='Nome do covidado'
          style={styles.input}
          placeholderTextColor='#000'
          onChangeText={(text) => setParticipantesName(text)}
          value={participanteName}
        />

        <TouchableOpacity
          style={styles.btn}
          onPress={handleParticipantAdd}
        >
          <Text style={{ fontWeight: 'bold', fontSize: 25 }}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participantes}
        keyExtractor={item => item}
        renderItem={({ item }) => (
          <Participant
            name={item}
            key={item}
            onRemove={() =>handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text> Sem Convidados!</Text>
        )}
      />


    </SafeAreaView>
  );
}
