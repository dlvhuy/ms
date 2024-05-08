import { API_URL } from "..";
import { getPosts } from "../../Redux/Reducers/PostReducer/PostReducer2";
import Store from "../../Redux/Store";
import { getValueFor } from "../../expoSecure/Secure";


export const AllPosts = async () =>{
    try {
        const response = await fetch(`${API_URL}/api/Post`)
        const json = await response.json();
       
        Store.dispatch(getPosts(json))
        
    }
    catch(error)
    {
        console.log(error)
    }
}

export const AddPost = async (postContent) =>{
        try{
            console.log(JSON.stringify({
                idGroup:null,
                postContent:'string'
            }))
        const responseAddPost = await fetch(
            `${API_URL}/api/Post`,
            {
                method:'post',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization': getValueFor("JWT_TOKEN")
                },
                body:JSON.stringify({
                    idGroup:null,
                    postContent: postContent
                }),
            });
       
        const jsonf = await responseAddPost.json();
        console.log(jsonf)
    }
    catch(error){
        console.log(error)
    }
}

export const AddPostInRealTime = async (postContent) =>{
    try{
        
      
}
catch(error){
    
}
}