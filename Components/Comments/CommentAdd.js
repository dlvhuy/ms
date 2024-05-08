import { KeyboardAvoidingView, StyleSheet, TextInput, View } from "react-native";
import ButtonIcon from "../CommonComponents/Buttons/ButtonIcon";
import ItemImageList from "../CommonComponents/Images/ItemImageList";
import * as ImagePicker from 'expo-image-picker'
import { useState,useReducer, useEffect, useContext } from "react";
import { CommentReducer,InitCommentState,addComment } from "../../Redux/Reducers/CommentReducer/CommentReducer";
import MyTextInput from "../CommonComponents/Inputs/MyTextInput";
import { CommentContext } from "../../Contexts/CommentContext";

export default function CommentAdd()
{
    const [state,dispatch] = useReducer(CommentReducer,InitCommentState)
    const CommentContent = useContext(CommentContext)
    const [comment,setComment] = useState({IdComment:1000,UserName:"Helloworld",CommentContent:"",IdPost:CommentContent.IdPost})
    
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
                    <ButtonIcon size={25} nameIcon={"send"} onPress={() => dispatch(addComment(comment))}/>
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