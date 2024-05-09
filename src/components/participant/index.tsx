import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './style';

type Props = {
    name: string;
    onRemove: () => void;
}

const Participant = ({ name, onRemove }: Props) => {
    return (
        <View style={styles.container}>
            <Text style={styles.name}>{name}</Text>

            <TouchableOpacity
                style={styles.btn}
                onPress={onRemove}
            >
                <Text style={styles.btnText}> - </Text>
            </TouchableOpacity>
        </View>
    )
}

export default Participant;
