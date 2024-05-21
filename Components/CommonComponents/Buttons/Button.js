import { StyleSheet,View,Text } from "react-native"

export const Button =  ({title}) =>{
    return(
        <View style={ButtonStyle.containerButton}>
            <Text style={ButtonStyle.textButtonStyle}>{title}</Text>
        </View>
    )
}

const ButtonStyle = StyleSheet.create({
    containerButton:{
        justifyContent:"center",
        height:40,
        maxWidth:500,
        paddingHorizontal:16,
        borderRadius:8,
        backgroundColor:"rgb(240, 240, 240)",
        color:"white",
        fontSize:13
        
    },
    textButtonStyle:{
        color:"black",
        fontSize:13,
        fontWeight:"500"
}
    
})