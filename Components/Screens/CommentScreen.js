import { FlatList, StatusBar, StyleSheet, View,KeyboardAvoidingView, KeyboardAvoidingViewBase } from "react-native";
import CommentAdd from "../Comments/CommentAdd";
import ListComment from "../Lists/ListComment";
import Header from "../Header_Bottom/Header";


export default function CommentScreen({idPost})
{
    return(
        <View style={styleCommentScreen.ContainerCommentScreen}>
            <ListComment ></ListComment>
            <CommentAdd idPost></CommentAdd>
        </View>
    )
}
const styleCommentScreen = StyleSheet.create({
    ContainerCommentScreen:{
        flex:1,
        flexDirection:"column",
        
        justifyContent:"flex-end",
        marginTop:StatusBar.currentHeight
    }
    
})