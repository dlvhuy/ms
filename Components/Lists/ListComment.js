import { ScrollView,StyleSheet,View,KeyboardAvoidingView } from "react-native";
import dataComment from "../../Data/dulieuComment.json"
import Comment from "../Comments/Comment";
import { useContext } from "react";
import { CommentContext } from "../../Contexts/CommentContext";
export default function ListComment()
{   
    const commentContent = useContext(CommentContext)
    return(
        <ScrollView>
            <View style={styleListPost.ContainerComment}>
                {commentContent.comments.map((item) =>{ return(

                    <Comment
                    key={item.IdComment}
                    Comment={item} 
                    />
                )})}
            </View>
        </ScrollView>
    )
}

const styleListPost = StyleSheet.create({

    ContainerComment:{
        flex:1,
        justifyContent:"center",
        paddingHorizontal:20,
        backgroundColor:"white"
    },
})