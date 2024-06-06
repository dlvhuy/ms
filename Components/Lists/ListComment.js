import { ScrollView,StyleSheet,View,KeyboardAvoidingView, Text } from "react-native";
import Comment from "../Comments/Comment";
import { connect } from "react-redux";
function ListComment({ListComment})
{   

    return(
        <ScrollView>
            <View style={styleListPost.ContainerComment}>
                {
                    ListComment == [] ?
                    <Text>Không có comment</Text>
                    :    
                    ListComment.map((item) =>{ return(
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
const mapStateToProps = (state) =>({
    ListComment:state.comment.Comments
});
export default connect(mapStateToProps)(ListComment);