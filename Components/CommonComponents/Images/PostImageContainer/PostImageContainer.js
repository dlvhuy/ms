import { View,Image, StyleSheet, TouchableOpacity } from "react-native"
import { GetPost } from "../../../../Apis/FetchConnection/Posts/AllPosts"
import { useNavigation } from "@react-navigation/native"
import { useContext } from "react"
import { PostContext } from "../../../../Contexts/PostProvider"
export const PostImageContainer =({postContentResponses,idPost}) =>{
        const navigation = useNavigation()
        const [statePost,dispatchPost] = useContext(PostContext)
        console.log("day la post ImageContainer: ",idPost)
        if(postContentResponses != null)
        {
                return(
                    
                        <View style={PostImageContainerStyle.ImageContainer} >
                            <Image style={PostImageContainerStyle.ImageContent} source={{uri:postContentResponses.urlimageVideo}}/>
                        </View>
                   
                )
        }
        else{
            return(<></>)
        }
    
}

const PostImageContainerStyle = StyleSheet.create({
    ImageContainer:{
        marginTop:15,
    },
    ImageContent:{
        width:'100%',
        height:300,
    },
})