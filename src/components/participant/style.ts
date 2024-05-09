import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        width: '100%',
        backgroundColor: '#B6B6B6',
        borderRadius: 5,
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    name: {
        color: '#FFF',
        flex: 1,
        fontSize: 18,
        marginLeft: 15
    },
    btn: {
        height: 50,
        width: 50,
        backgroundColor: "#FF0000",
        alignItems: 'center',
        justifyContent: 'center',
    },
    btnText: {
        fontWeight: 'bold',
        fontSize: 25
    }
})
