import { KeyboardAvoidingView, StyleSheet, TextInput, View } from "react-native";
import ButtonIcon from "../CommonComponents/Buttons/ButtonIcon";
import ItemImageList from "../CommonComponents/Images/ItemImageList";
import * as ImagePicker from 'expo-image-picker'
import { useState, useContext } from "react";
import MyTextInput from "../CommonComponents/Inputs/MyTextInput";
import {CommentContext} from "../../Contexts/CommentProvider";
import { AddCommentPostConnection } from "../../Apis/HubsConnection/Connections/CommentConnection";

export default function CommentAdd()
{
    
    const [state,dispatch,IdPost] = useContext(CommentContext)
    const [comment,setComment] = useState({CommentContent:"",IdPost:IdPost})
    
    const [selectImage,setSelectImage] = useState(null);

    const handleRemoveImage = () =>{
        setSelectImage(null);
    }

    const pickImage = async () =>{
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [16,9],
            quality: 1,
        });
        console.log(result.assets[0].uri);
        
        if (!result.canceled) {
        setSelectImage(result.assets[0].uri);
    }

}
    return (
        

        <View style={styleCommentAdd.Container}>
            
                <MyTextInput textChange={(text) => setComment({...comment,CommentContent:text})} Placeholder="Viết bình luận..." size={50}/>
            
            <View style={styleCommentAdd.ContainerButtons}>
                {selectImage != null ? 
                <View style={styleCommentAdd.ContainerListImage}>
                        <ItemImageList onPress={handleRemoveImage} source={selectImage}/>
                </View>
                :
                <ButtonIcon size={25} nameIcon={"image"} onPress={pickImage}/>
            }
                    <ButtonIcon size={25} nameIcon={"send"} onPress={() => AddCommentPostConnection(comment)}/>
            </View>
        </View>
            
    )
}
const styleCommentAdd = StyleSheet.create({
    Container:{
        borderTopWidth:0.5,
        maxHeight:300,
        padding:10,
        
    },
    ContainerTextInputCommentAdd:{
        backgroundColor:"rgb(240, 242, 245)",
        paddingHorizontal:10,
        borderRadius:16,
        maxHeight:120  
    },
    ContainerButtons:{
       
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    ContainerListImage:{
        padding:8,
    },
})