import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F6F6F6',
      padding: 10,
    },
    header: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 50
    },
    name: {
        fontSize: 18,
        fontWeight: '100',
    },
    input: {
        height: 50,
        flex: 1,
        backgroundColor: '#D6D6D6',
        marginRight: 4,
        padding: 10
    },
    btn: {
        height: 50,
        width: 50,
        backgroundColor: "#31CF67",
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 30,
        marginBottom: 40
    }
  });
