import { Button,StyleSheet,Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import FontAweSome from "@expo/vector-icons/FontAwesome"


export default function ButtonPost({buttonIcon,buttonTitle})
{

    return (
        <View style={buttonPost.container}>
            <TouchableOpacity
                activeOpacity={0.6}
                backgroundColor="white"
                onPress={() =>{ console.log("helo world")}}
            >
                <View style={buttonPost.button}>
                    <FontAweSome style={buttonPost.textAndIcon} name={buttonIcon} size={20}></FontAweSome>
                    <Text style={buttonPost.textAndIcon}>{buttonTitle}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
};

const buttonPost = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        maxWidth:150,
        minWidth:80,
        
        
    },
    button:{
        height:40,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        columnGap:8,
        borderRadius:4,
        backgroundColor:"white"
    },
    textAndIcon:{
        color:"black",
        fontSize:15
    }
})