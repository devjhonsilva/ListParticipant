import React from 'react';
import { TextInput, Text, SafeAreaView, TouchableOpacity, View, FlatList, Alert } from 'react-native';

import { styles } from './style';
import Participant from '../../components/participant';


export default function Home() {
  const handleParticipantAdd = () => {
    return (
      console.log('Clicou em adicionar')
    )
  }

  const handleParticipantRemove = (name: string) => {
    return (
      console.log(`removeu participante ${name}`)
    )
  }

  const participantes = ['Jonatan', 'Mayara', 'Vitinho', 'Fabio', 'Marinalva', 'Rita', 'Josivaldo', 'Breno', 'Ailton', 'Carlos', 'Jõao', 'Felipe', 'Daniel']


  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Nome do evento</Text>
      <Text style={styles.name}>Sexta, 25 de Janeiro 2024</Text>

      <View style={styles.form}>
        <TextInput
          placeholder="Nome do covidado"
          style={styles.input}
          placeholderTextColor="#000"
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
            onRemove={() => handleParticipantRemove}
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
