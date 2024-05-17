import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#333333',
      padding: 10,
    },
    logo: {
        height: 150,
        width: '100%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 70,
        marginBottom: 20,
        backgroundColor: '#0D0D0D',

    },
    boxInput: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom: 10,
        position: 'absolute',
        left: 10,
        bottom: -15
    },
    textInput: {
        color: '#FFF',
        height: 50,
        backgroundColor: '#808080',
        borderRadius: 5,
        width: '80%',
        marginRight: 5,
        fontSize: 20,
        padding: 10
    },
    btn: {
        backgroundColor: '#4EA8DE',
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        width: 50
    },
    btnText: {
        color: '#FFF',
        fontSize: 35,
        fontWeight: 'bold'
    },
    headerList: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 16,
        marginBottom: 20
    },
    headerListText: {
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold'
    },
    headerListCount: {
        backgroundColor: '#808080',
        color: '#FFF',
        fontSize: 18,
        fontWeight: 'bold',
        marginLeft: 5,
        borderRadius: 7
    }
})
