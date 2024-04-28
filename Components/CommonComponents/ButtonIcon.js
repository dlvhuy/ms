import { Pressable, StyleSheet, Touchable,View,Text, useWindowDimensions } from "react-native";
import FontAwsome from "@expo/vector-icons/FontAwesome"
import Ionicons from '@expo/vector-icons/Ionicons';
export default function ButtonIcon({nameIcon})
{
    return(
        <View style={styleButtonIcon.button}>
            <Ionicons name={nameIcon} size={25} color="gray" />
        </View>
    )
}

const styleButtonIcon = StyleSheet.create({
    button:{
        
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth:2,
        height:45,
        width:45,
        borderRadius:16,
        borderColor:"gray",
        opacity:0.7
        

    },
   
});