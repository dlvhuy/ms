import { TouchableOpacity,Text,Image,View,StatusBar, StyleSheet } from "react-native"
import { launchImageLibrary } from "react-native-image-picker"
import { useState } from "react"


export default function ButtonOpenGallery(){
    const [imageUri,setImageUri] = useState()
    const options ={
        storageOptions:{
            path:'images',
            mediaType:'photo'
        }
    }
    const openGallery = () =>{
    
        launchImageLibrary((options),response => {
            setImageUri(response.assets[0].uri);
        })
    }


    return(
        <View style={style.container}>
            <TouchableOpacity onPress={openGallery}>
                <Text>Hellotowls</Text>
            </TouchableOpacity>
            <Image source={imageUri}></Image>
        </View>
    )
}
const style = StyleSheet.create({
    container:{
    flex:1,
    justifyContent:'center',
    marginTop:StatusBar.currentHeight,
    borderWidth:1,
    height:200,
    width:200
}
})