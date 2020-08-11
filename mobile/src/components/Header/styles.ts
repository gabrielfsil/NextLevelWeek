import { StyleSheet } from 'react-native'
import Constants from 'expo-constants'

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#6842C2",
        padding: 40,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    title: {
        color: "#9C98A6"
    },
    image: {
        resizeMode:"contain"
    }
})

export default styles