
import { View,StyleSheet, ScrollView,Text} from "react-native"
import Post from "../Posts/Post"
import { useContext } from "react"
import { PostContext } from "../../Contexts/PostProvider"
import { UpdateLikePostConnection } from "../../Apis/HubsConnection/Connections/PostConnection"
import { AddPostLink } from "../CommonComponents/Inputs/AddPostLink"

export default function ListPost({listPost,isCurrentUser = true})
{   
    
    // const listPosts = useSelector((state)=> state.Post.Posts)
    
    return(
            <ScrollView>
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
                            onPressHeartButton={() => {
                                UpdateLikePostConnection(item.idPost)
                                
                            }}
                            ></Post>
                        )})
                    }
                </View>
          
            </ScrollView>
        // {
        //     (stateUserInfo.Search == false) 
        //     ?
        //     <View>
        //         <Text>Không có users</Text>
        //     </View>
        //     :
        //     stateUserInfo.Search.map((item) =>{return(
        //         <ItemSearch
        //         key={item.idUser}
        //         nameUser={item.userName}
        //         onPress={() => {
        //             getUserInfo(item.idUser,navigation,dispatchUserInfo,dispatchPost)
        //         }}
        //                 />
        //             )}) 
                    
                    
        // }
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