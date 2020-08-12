import { StyleSheet, Dimensions } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f0f0f7"
    },

    teacherList: {
        marginTop: -40,
    },

    searchForm: {
        marginBottom: 8
    },

    label: {
        color: "#d4c2ff",
        fontFamily: "Poppins_400Regular"
    },
    input: {
        height: 54,
        backgroundColor: '#fff',
        borderRadius: 8,
        justifyContent: "center",
        paddingHorizontal: 16,
        marginTop:4,
        marginBottom: 16
    },
    
    inputGroup:{
        flexDirection:"row",
        justifyContent:"space-between"
    },

    inputBlock:{
        width:"48%"
    },

    buttonSearchContainer:{
        marginBottom: 8
    },

    buttonSearch:{
        width:"100%",
        height:54,
        backgroundColor:"#04d361",
        borderRadius: 8,
        justifyContent:"center",
        alignItems:"center"
    },

    buttonSearchText:{
        fontFamily:"Archivo_700Bold",
        fontSize:16,
        color:"#FFF"
    }
})

export default styles