import { Pressable, StyleSheet, Touchable,View,Text } from "react-native";
import FontAwsome from "@expo/vector-icons/FontAwesome"
export default function ButtonIcon({nameIcon,onPress})
{
    return(
        <View style={styleButtonIcon.button}>
           <FontAwsome.Button onPress={() => {onPress}} size={20} name={nameIcon}/>
        </View>
    )
}

const styleButtonIcon = StyleSheet.create({
    button:{
        
        justifyContent:"center",
        alignItems:"center",
        width:40,
        height:40,
        borderRadius:40,
        borderWidth:2,
        borderColor:"gray",
        opacity:0.6,
        color:"gray",

    },
});