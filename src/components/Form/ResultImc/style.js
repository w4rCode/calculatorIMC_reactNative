import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    contextImx:{
        flex: 1,
        paddingTop: 20,
        borderRadius:50,
        alignItems: "center",
        width: "100%",
    },
    numberImc:{
        fontSize:60,
        color: "#24757E",
        fontWeight: "bold",
    },
    information:{
        fontSize:18,
        color: "#24757E",
        fontWeight:"bold",
    },
    errorMessage:{
        fontSize:12,
        color:"red",
        fontWeight:"bold",
        paddingLeft:20,
    },
    boxShareButton:{
        width: "100%",
        alignItems: "center",
        marginBottom: 10,
    },
    shared:{
        backgroundColor: "#1877f2",
        borderRadius:50,
        paddingBottom: 5,
        paddingTop:5,
    },
    sharedText:{
        color: "#ffffff",
        fontWeight: "bold",
        paddingHorizontal: 30,
    },
})
export default styles