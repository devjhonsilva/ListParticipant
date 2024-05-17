import React, {useState} from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';
import Feather from '@expo/vector-icons/Feather';

type Props = {
    addText: string;
    onRemove: () => void;
    onComplet: () => void;
    completed: boolean;
}

const Participant = ({ addText, onRemove, onComplet, completed }: Props) => {

    return (
        <View style={styles.container}>
            <View style={styles.btnCircle}>
                <TouchableOpacity onPress={onComplet}>
                    <Feather name={completed ? 'check-circle' : 'circle'} size={20} color='#333333' />
                </TouchableOpacity>
            </View>
            <View style={styles.text}>
                <Text style={{textDecorationLine: completed ? 'line-through' : 'none' }}>{addText}</Text>
            </View>
            <View style={styles.btnTrash}>
                <TouchableOpacity onPress={onRemove}>
                    <Feather name='trash-2' size={20} color='#333333'/>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Participant;
