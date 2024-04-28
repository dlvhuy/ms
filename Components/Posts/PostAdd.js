import { Button, StyleSheet,TextInput, View,Image,Text, TouchableOpacity, StatusBar, Pressable  } from "react-native";
import ButtonIcon from "../CommonComponents/ButtonIcon";
import * as ImagePicker from 'expo-image-picker'
import { useRef, useState } from "react";
import ItemImageList from "../CommonComponents/Images/ItemImageList";



export default function PostAdd({UserName})
{
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
        console.log(result);
        
        if (!result.canceled) {
        setSelectImage(result.assets[0].uri);
    }

    

    }
    const avatar = require("../../assets/facebook.png");
    return (
        <View style={stylePostAdd.PostAdd}>
            <View style={stylePostAdd.ContainerHeader}>
                <View style={stylePostAdd.ContainerInfomation}>
                    <Image style={stylePostAdd.imageAvatar} source={avatar} ></Image>
                    <Text style={stylePostAdd.UserName}>{UserName}</Text>
                </View>
            </View>
            
            <View style={stylePostAdd.ViewInput} >
                <TextInput
                    
                    placeholder="What's on your mind, UserName"
                    multiline
                    numberOfLines={5}
                    style={stylePostAdd.input}
                    />            
            </View>
            {console.log("day nx",selectImage)}
                <View style={stylePostAdd.ContainerListImage}>
                    {selectImage &&  <ItemImageList onPress={handleRemoveImage} source={selectImage}/>}
                </View>
                
            <View style={stylePostAdd.ContainerButtons}>
                <View style={stylePostAdd.ContainerButtonIcon}>
                    <Pressable onPress={pickImage}>
                        <ButtonIcon nameIcon={"image"} ></ButtonIcon>
                    </Pressable>
                    <ButtonIcon nameIcon={"camera"} ></ButtonIcon>
                    <ButtonIcon nameIcon={"location"} ></ButtonIcon>
                </View>
                <View>
                        <Button title="Post"></Button>
                </View>
            </View>
        </View>
    )
}

const stylePostAdd = StyleSheet.create({
    PostAdd:{
        backgroundColor:"white",
        marginVertical:StatusBar.currentHeight,
        padding: 20,
        borderRadius:16,
        shadowColor:"Black", 
    },
    ContainerHeader:{
        paddingHorizontal:8,  
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    ContainerInfomation:{
        flexDirection:"row",
        justifyContent:"center"
    },
    imageAvatar:{
        width:50,
        height:50,
        borderRadius:25,
        borderWidth:1,
        marginRight:8
    },
    ViewInput:{
        marginVertical:8,
        
    },
    SelectedImage:{
        height:80,
        width:80,
        borderRadius:8,
    },
    input:{
        paddingHorizontal:8,
        borderRadius:8,
        height:50,
        fontSize:20,
        borderColor:"gray",
        
    },
    button:{
        backgroundColor:"blue",
        flexDirection:"row",
        justifyContent:"space-between",
        columnGap:10
    },
    ContainerButtonIcon:{
        paddingHorizontal:8,  
        flexDirection:"row",
        gap:8
    },
    ContainerButtons:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    ContainerListImage:{
        paddingHorizontal:8,
        marginVertical:8,
    },
    buttonContainerIcon:{
        
       
        flexDirection:"row",
        columnGap:10,
    },
    UserName:{
        fontSize:18
    },
    image:{
        width:100,
        height:100
    }
    
    
})