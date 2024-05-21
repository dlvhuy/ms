import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { ImageAvatar } from "../CommonComponents/Images/ImageAvatar";

export default function ItemSearch ({nameUser,onPress,avatar}){
    return (
        <TouchableOpacity style={itemSearchStyle.itemSearchContainer} onPress={onPress}>
            <View >
                <ImageAvatar UserName={nameUser} avatar={avatar} isHaveInfomation={true}/> 
            </View>
        </TouchableOpacity>
    )
}
const itemSearchStyle = StyleSheet.create({
  itemSearchContainer:{
    paddingVertical:2
  },  
})