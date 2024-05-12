
import { View,StyleSheet, ScrollView} from "react-native"
import Post from "../Posts/Post"
import { useContext } from "react"
import { PostContext } from "../../Contexts/PostProvider"
import { UpdateLikePostConnection } from "../../Apis/HubsConnection/PostConnection/PostConnections"
import { connection } from "../../Apis/HubsConnection/Hubs"
import { updateLike } from "../../Reducers/PostAction"
import { postSlice } from "../../Reducers/postSlice"
import { useSelector } from "react-redux"
r
export default function ListPost()
{   
    // const [state,dispatch] = useContext(PostContext);
    const listPosts = useSelector((state)=> state.Post.Posts)
    return(
        
            <ScrollView>
                <View style={styleListPost.ContainerPost}>

                        {listPosts.map((item) =>{ return( 
                            <Post 
                            key={item.idPost}
                            Post={item}
                            onPressHeartButton={() => {
                                UpdateLikePostConnection(item.idPost)
                                
                             }}
                            ></Post>
                        )})}
                </View>
            </ScrollView>
       
    )
}
const styleListPost = StyleSheet.create({

    ContainerPost:{
        flex:1,
        justifyContent:"center",
        backgroundColor:"white"
    },
})