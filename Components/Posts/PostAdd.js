import { Button, StyleSheet,TextInput, View,Image,Text, TouchableOpacity  } from "react-native";
import ButtonIcon from "../CommonComponents/ButtonIcon";
import * as ImagePicker from "react-native-image-picker";
import { useState } from "react";



export default function PostAdd({UserName})
{
    const [selectImage,setSelectImage] = useState();

    let options = {
       
        storageOptions: {
          saveToPhotos: true,
          mediaType: 'images',
        },
      };
    const openlib =  () => {
        ImagePicker.launchImageLibrary({ noData: true }, (response) => {
            console.log(response);
            // if (response) {
            //   setPhoto(response);
            // }
          });
    }
    const avatar = require("../../assets/adaptive-icon.png");
    return (
        <View style={stylePostAdd.PostAdd}>
            <View style={stylePostAdd.ContainerInfomation}>
                    <Image style={stylePostAdd.imageAvatar} source={selectImage} ></Image>
                    <Text style={stylePostAdd.UserName}>{UserName}</Text>
            </View>
            <TextInput  multiline numberOfLines={3}   style={stylePostAdd.input} placeholder="What's on your mind, UserName"/>
            <View style={stylePostAdd.button}>
                <View style={stylePostAdd.buttonContainerIcon}>
                    <ButtonIcon onPress={() => openlib()}  nameIcon={"image"}/>
                    <TouchableOpacity onPress={() => ImagePicker.launchImageLibrary({
      mediaType: 'photo',
      includeBase64: false,
      maxHeight: 200,
      maxWidth: 200,
    },
    (response) => {
      console.log(response);
      this.setState({
        resourcePath: response
      });
    },
  )}>
                        <Text>Helloworld</Text>
                    </TouchableOpacity>
                    {/* <ButtonIcon onPress={() => {console.log("PlaceHere")}}nameIcon={"location-arrow"}/> */}
                </View>
                <Button  title="Post"></Button>
            </View>
        </View>
    )
}

const stylePostAdd = StyleSheet.create({
    PostAdd:{
        backgroundColor:"white",
        marginVertical:10,
        padding: 20,
        borderRadius:16,
        shadowColor:"Black", 
    },
    ContainerInfomation:{  
        flexDirection:"row",
        justifyContent:"flex-start"
    },
    imageAvatar:{
        width:50,
        height:50,
        borderRadius:25,
        borderWidth:1,
        marginRight:8
    },
    input:{
        height:70,
        fontSize:20,
        
    },
    button:{
        flexDirection:"row",
        justifyContent:"space-between",
        columnGap:10
    },
    buttonIcon:{
        flex:1,
        justifyContent:"flex-start",
        alignItems:"center",
        borderWidth:1,
        borderRadius:50,
        
        backgroundColor:"blue",
    },
    buttonContainerIcon:{
        flexDirection:"row",
        columnGap:5,
    },
    UserName:{
        fontSize:15
    },
    buttonRadius:{
        borderRadius:50
    }  
    
})