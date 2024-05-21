import { Image, StyleSheet, View,Text } from "react-native"
export default function Comment({Comment})
{
    const avatar = require("../../assets/adaptive-icon.png");
    return(
        <View style={styleComment.Container}>
            <View style={styleComment.ContainerImage}>
                <Image style={styleComment.imageAvatar} source={{uri:Comment.avatarImage}}/>
            </View>
            <View>
                <View style={styleComment.ContainerContentComment}>
                    <Text>{Comment.userName}</Text>
                    <Text>{Comment.contentCommentPost}</Text>
                </View>
                <View style={styleComment.ContainerButtonOthers}>
                    <Text>Thích</Text>
                </View>
            </View>
            
        </View>
    )
}
const styleComment = StyleSheet.create({
    Container:{
        flexDirection:"row",
        marginVertical:5,
    },
    ContainerImage:{
        width:50,
    },
    imageAvatar:{
        width:40,
        height:40,
        borderRadius:25,
        borderWidth:1,
        marginRight:8
    },
    ContainerContentComment:{
        borderRadius:16,
        maxWidth:250,
        padding:10,
        backgroundColor:"rgb(240, 242, 245)"        
    },
    ContainerButtonOthers:{
        paddingHorizontal:10
    }

})