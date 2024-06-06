import { StyleSheet,Image,View, Pressable } from "react-native"
import Ionicons from '@expo/vector-icons/Ionicons';
import IconRemove from "../Icons/IconRemove";
export default function ItemImageList({source,onPress})
{
    return(
        <View>
            
            <View style={styleImage.SelectedImage}>
                <Image style={styleImage.SelectedImage} source={{uri:source}}/>
            </View>
                <Pressable onPress={onPress}>
            <View style={styleImage.icon}>
                    <Ionicons name="remove-circle" color={"white"}  size={25}></Ionicons>
            </View>
                </Pressable>
                
            
        </View>
    )
}

const styleImage = StyleSheet.create({

    SelectedImage:{
        
        height:70,
        width:70,
        borderRadius:8,
    },
    icon:{
        width:25,
        height:25,
        bottom:65,
        left:45
    }
})