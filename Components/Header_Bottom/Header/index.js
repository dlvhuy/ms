import { StyleSheet, View,Text,Image, StatusBar } from "react-native"
import FontAwsome from "@expo/vector-icons/FontAwesome"
import FontAwsome5 from "@expo/vector-icons/FontAwesome5"
export default function Header({IsMainHeader})
{
   if(IsMainHeader)
   {
    const avatar = require("../../../assets/adaptive-icon.png");
    return (
        <View style={styleHeader.container}>
            <Text style={styleHeader.HeaderText}>HD SOCIA</Text>
            <View>
                <Image style={styleHeader.imageAvatar} source={avatar} ></Image>
            </View>
        </View>
    )
   } 
    else{
        return(
        <View style={styleHeader.container}>
            <FontAwsome color={"gray"} name="arrow-left" size={20}></FontAwsome>
        </View>
        )
    }
}

const styleHeader= StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"space-between",
        paddingHorizontal:20,
        flexDirection:"row",
        borderTopRightRadius:8,
        borderTopLeftRadius:8,
        height:50,
        backgroundColor:"white",
        borderBottomWidth:0.1,
    },
   
    HeaderText:{
        fontSize:25,
        fontWeight:"bold",
        color:"black"
    },
    imageAvatar:{
        width:40,
        height:40,
        borderRadius:25,
        borderWidth:1,
        marginRight:8,
        
    },
})