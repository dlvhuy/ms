import { View,Text, StyleSheet, TouchableOpacity } from "react-native"
import { ImageAvatar } from "../Images/ImageAvatar"
import { useNavigation } from "@react-navigation/native";
export const AddPostLink = () =>{
    const avatar = require("../../../assets/adaptive-icon.png");
    const navigation = useNavigation();
    return (
        <View style={addPostLinkStyle.containerAddPostLink}>
            <ImageAvatar avatar={avatar} UserName={"string"} isHaveInfomation={false}/>
            <TouchableOpacity onPress={() => navigation.navigate("AddPost")}>
                <View style={addPostLinkStyle.styleInput}>
                    <Text style={addPostLinkStyle.styleInputText}>What's on your mind, UserName</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const addPostLinkStyle = StyleSheet.create({
    containerAddPostLink:{
        paddingHorizontal:20,
        alignItems:"center",
        flexDirection:"row",
        gap:10,
        backgroundColor:"white",
        marginTop:5
        
    },
    styleInput:{
        width:250,
        borderRadius:16,
        height:35,
        justifyContent:"center",
        paddingHorizontal:10,
        backgroundColor:"rgb(240, 240, 240)",
    },
    styleInputText:{
        color:"gray"
    },  
    imageAvatar:{

    }
    
})