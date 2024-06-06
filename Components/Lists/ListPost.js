
import { View,StyleSheet, ScrollView,Text} from "react-native"
import Post from "../Posts/Post"
import { AddPostLink } from "../CommonComponents/Inputs/AddPostLink"
// import { PostImageContainer } from "../CommonComponents/Images/PostImageContainer/PostImageContainer"
import {connect} from "react-redux"

function ListPost({listPost,isCurrentUser = true})
{   
    // const [statePost,dispatchPost] = useContext(PostContext);
    
    console.log(listPost)
    return(
            <ScrollView style={{backgroundColor:"rgb(240, 240, 240)"}}>
                {
                    isCurrentUser?
                    <AddPostLink />
                    :
                    <></>
                }
                <View style={styleListPost.ContainerPost}>
                    {(listPost == false) ?
                    <View style={styleListPost.NonPostContainer}>
                        <Text>Không có danh sách bài viết</Text>
                    </View>
                    :
                    listPost.map((item) =>{ return( 
                            <Post 
                            key={item.idPost}
                            Post={item}
                            isPostScreen={false}
                            children={null}
                            >
                            </Post>
                               
                        )})
                    }
                </View>
          
            </ScrollView>
    )
}
const styleListPost = StyleSheet.create({

    ContainerPost:{
        flex:1,
        justifyContent:"center",
       
    },
    NonPostContainer:{
        alignItems:"center",
        marginVertical:10
    }
})
const mapStateToProps = (state) =>({
    listPost:state.post.Posts,
});
export default connect(mapStateToProps)(ListPost);