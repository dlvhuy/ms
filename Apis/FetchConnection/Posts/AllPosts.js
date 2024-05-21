import { API_URL } from "../..";
import { getPosts } from "../../../Reducers/PostAction";

import { getValueFor } from "../../../expoSecure/Secure";


export const AllPosts = async (dispatch) =>{
    try {
        const response = await fetch(`${API_URL}/api/Post`,{
            method:'Get',
            headers:{
                "Content-Type": 'application/json',
                'Authorization': `Bearer ${getValueFor("JWT_TOKEN")}`, 
            },
        });

        const json = await response.json();
        
        dispatch(getPosts(json))
        
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