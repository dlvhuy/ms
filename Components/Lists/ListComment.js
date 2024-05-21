import { ScrollView,StyleSheet,View,KeyboardAvoidingView, Text } from "react-native";
import dataComment from "../../Data/dulieuComment.json"
import Comment from "../Comments/Comment";
import { useContext } from "react";
import { CommentContext } from "../../Contexts/CommentProvider";
export default function ListComment()
{   
    const [state,dispatch,IdPost]= useContext(CommentContext)
    return(
        <ScrollView>
            <View style={styleListPost.ContainerComment}>
                {
                    state.Comments == [] ?
                    <Text>Không có comment</Text>
                    :    
                    state.Comments.map((item) =>{ return(
                        <Comment
                        key={item.IdComment}
                        Comment={item} 
                        />
                    )})
                }
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