import { Button,StyleSheet,Text, TouchableHighlight, TouchableOpacity, View } from "react-native";
import FontAweSome from "@expo/vector-icons/FontAwesome"


export default function ButtonIconPress({buttonIcon,buttonTitle,onPress,isLike})
{
    

    return (
        <View style={buttonPost.container}>
                    <TouchableHighlight
                            onPress={onPress}
                        >
                    {
                        isLike ?
                        <View style={buttonPost.button}>
                            <FontAweSome style={buttonPost.textAndIconNotPress} name={buttonIcon} size={20}></FontAweSome>
                            <Text style={buttonPost.textAndIconNotPress}>{buttonTitle}</Text>
                        </View> 
                        :
                        <View style={buttonPost.button}>
                            <FontAweSome style={buttonPost.textAndIconPress} name={buttonIcon} size={20}></FontAweSome>
                            <Text style={buttonPost.textAndIconPress}>{buttonTitle}</Text>
                        </View>
                    }
            </TouchableHighlight>
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
    textAndIconNotPress:{
        color:"rgb(8, 102, 255)",
        fontSize:15
    },
    textAndIconPress:{
        color:"gray",
        fontSize:15
    }
})