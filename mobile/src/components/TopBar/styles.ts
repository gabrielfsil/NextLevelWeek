import { StyleSheet, Dimensions } from 'react-native'


const styles = StyleSheet.create({
    contentTitle:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
    },
    header:{
        backgroundColor:"#8257E5",
        paddingHorizontal: 40,
        paddingBottom: 40
    },
    title:{
        fontFamily: "Archivo_700Bold",
        fontSize: 24,
        lineHeight:32,
        color:"#FFFFFF",
        maxWidth: 160,
        marginVertical:40
    },
    iconTitle:{
        color: "#04D361"
    }
})

export default styles