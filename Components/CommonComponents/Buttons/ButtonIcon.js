import { Pressable, StyleSheet, Touchable,View,Text, useWindowDimensions, TouchableHighlight } from "react-native";
import FontAwsome from "@expo/vector-icons/FontAwesome"
import Ionicons from '@expo/vector-icons/Ionicons';
export default function ButtonIcon({nameIcon,size,onPress})
{
    return(
            <TouchableHighlight onPress={onPress}> 
                <View style={[styleButtonIcon.button,{width:size+15 ,height:size + 15}]}>
                    <Ionicons name={nameIcon} size={size} color="gray" />
                </View>
            </TouchableHighlight>
    )
}

const styleButtonIcon = StyleSheet.create({
    button:{
        
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:16,
        borderColor:"gray",
        opacity:0.7
        

    },
   
});