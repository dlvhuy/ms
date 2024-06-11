import { ScrollView, StatusBar, StyleSheet,View } from "react-native"
import Post from "../Posts/Post"
import { PostScreenImageContainer } from "../CommonComponents/Images/PostImageContainer/PostScreenImageContainer"
import Header from "../Header_Bottom/Header"
import { memo } from "react";
import { connect } from "react-redux"
const PostScreen = ({post}) =>{
    return (
        <ScrollView>
            <View style={PostScreenStyle.PostScreenContainerStyle}>
                <Header IsMainHeader={false}/>
                <Post
                 Post={post}
                 isPostScreen={true}
                 >
                    <PostScreenImageContainer listPostContain={post.postContentResponses}/>
                </Post>
            </View>       
        </ScrollView>
    )
}
const PostScreenStyle = StyleSheet.create({
    PostScreenContainerStyle:{
        flex:1,
        marginTop:StatusBar.currentHeight
    },
})
const mapStateToProps = (state) =>({
    post:state.post.PostCurrent
});

export default connect(mapStateToProps)(PostScreen);