import { API_URL } from "../..";
import { getPost2,getPosts } from "../../../ContextRedux/Actions/postActions";
import { getValueFor } from "../../../expoSecure/Secure";
import store from "../../../ContextRedux/Store";
import { connection } from "../../HubsConnection/Hubs";
export const AllPosts = async () =>{
    try {
        const response = await fetch(`${API_URL}/api/Post`,{
            method:'Get',
            headers:{
                "Content-Type": 'application/json',
                'Authorization': `Bearer ${getValueFor("JWT_TOKEN")}`, 
            },
        });

        const json = await response.json();
        if(json.success)
        {
            store.dispatch(getPosts(json.object))
        }
        
    }
    catch(error)
    {
        console.log(error)
    }
}
export const LikePost = async (idPost) =>{
    console.log("day la testHub:",idPost)
    try {
        await fetch(`${API_URL}/api/Post/${idPost}`,{
            method:'Get',
            headers:{
                "Content-Type": 'application/json',
                'Authorization': `Bearer ${getValueFor("JWT_TOKEN")}`,
            },
        });
    }
    catch(error)
    {
        console.log(error)
    }
}

export const AddPost = async ({idGroup,postContent,listImage}) =>{
        try{
                const data = []
                listImage.forEach((item,index) =>{
                    data.push({fileName:item.uri,urlimageVideo:item.base64})
                })
                const responsePost = await fetch(`${API_URL}/api/Post`,{
                    method:'post',
                    body:JSON.stringify({
                        idGroup:null,
                        postContent:postContent,
                        postContentRequests:data
                    }),
                    headers:{
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${getValueFor("JWT_TOKEN")}`, 
                    },
                });
                const responsePOst = await responsePost.json()
                console.log("day la Add Post:",responsePOst)
    }
    catch(error){
        console.log(error)
    }
}

export const GetPost2 = async (idPost,navigation) =>{
    console.log("day la getPost",idPost)
    try{
        store.dispatch(getPost2(idPost))
        navigation.navigate("PostDetail")
    }
    catch(error){
        console.log(error)
    }
}



