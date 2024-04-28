import { StyleSheet,Image,View, Pressable, } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import IconRemove from "../Icons/IconRemove";
export default function ItemImageList({source,onPress})
{
    return(
        <View style={styleImage.Container}>
            
            <View style={styleImage.SelectedImage}>
                <Image style={styleImage.SelectedImage} source={{uri:source}}/>
            </View>
            <View style={styleImage.icon}>
                <Pressable onPress={onPress}>
                    <Ionicons name="remove-circle" color={"white"}  size={20}></Ionicons>
                </Pressable>
            </View>
                
            
        </View>
    )
}

const styleImage = StyleSheet.create({
    Container:{
        
    },
    SelectedImage:{
        height:70,
        width:70,
        borderRadius:8,
    },
    icon:{
        width:20,
        height:20,
        bottom:65,
        left:45
    }
})