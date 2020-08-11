import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f7"
    },

    contentFilter: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        borderBottomColor: "#D4C2FF",
        borderBottomWidth: 0.5,
        paddingVertical:16
    },

    textFilter: {
        marginLeft: 16,
        color: "#D4C2FF",
        fontFamily: "Archivo_400Regular"
    }

})

export default styles