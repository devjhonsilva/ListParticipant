import React, { useState } from 'react';
import { TextInput, Text, SafeAreaView, TouchableOpacity, View, FlatList, Alert } from 'react-native';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';

import { styles } from './style';
import Participant from '../../components/participant';


export default function Home() {
  const [list, setList] = useState<string[]>([]);
  const [addText, setAddText] = useState('');
  const [taskCreated, setTaskCreated] = useState<number>(0);
  const [taskCompleted, setTaskCompleted] = useState<number>(0);
  // Estado para controlar se cada tarefa está concluída ou não
  const [completedTasks, setCompletedTasks] = useState<{ [key: string]: boolean }>({});

  const handleAdd = () => {
    setList([...list, addText]);
    setTaskCreated(taskCreated + 1);
    // Adiciona a nova tarefa ao estado de tarefas completadas, inicialmente como false
    setCompletedTasks({ ...completedTasks, [addText]: false });
  };

  const handleRemove = (itemToRemove: string) => {
    const updatedList = list.filter(item => item !== itemToRemove);
    setList(updatedList);
    setTaskCreated(taskCreated - 1);
    if (completedTasks[itemToRemove]) {
      setTaskCompleted(taskCompleted - 1);
    }
    // Remove a tarefa do estado de tarefas completadas
    const { [itemToRemove]: _, ...updatedCompletedTasks } = completedTasks;
    setCompletedTasks(updatedCompletedTasks);
  };

  const handleCompleted = (item: string) => {
    // Alterna o estado da tarefa para concluída
    setCompletedTasks({ ...completedTasks, [item]: !completedTasks[item] });
    if (!completedTasks[item]) {
      setTaskCompleted(taskCompleted + 1);
    } else {
      setTaskCompleted(taskCompleted - 1);
    }
  };

  return (
    <View style={styles.container}>


      <View>
        <View style={styles.logo}>
          <MaterialCommunityIcons name="rocket-launch" size={45} color='#5E60CE' />
          <Text style={{ color: '#4EA8DE', fontSize: 60, fontWeight: 'bold', marginLeft: 10 }}>to</Text>
          <Text style={{ color: '#5E60CE', fontSize: 60, fontWeight: 'bold' }}>do</Text>
        </View>

        <View style={styles.boxInput}>
          <TextInput
            placeholder='Digite sua tarefa aqui.'
            style={styles.textInput}
            value={addText}
            onChangeText={(text) => setAddText(text)}
          />
          <TouchableOpacity style={styles.btn} onPress={handleAdd}>
            <MaterialIcons name="add-circle" size={24} color="#FFF" />
          </TouchableOpacity>
        </View>

      </View>

      <View style={styles.headerList}>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.headerListText}> Criadas</Text>
          <Text style={styles.headerListCount}> {taskCreated} </Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
          <Text style={styles.headerListText}>Concluidas</Text>
          <Text style={styles.headerListCount}> {taskCompleted} </Text>
        </View>
      </View>

      <FlatList
        data={list}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant addText={item} onRemove={() => handleRemove(item)} onComplet={() => handleCompleted(item)} completed={completedTasks[item] || false} />
        )}
      />

    </View>
  );
}
