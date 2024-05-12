import { updateLike, addPost } from "../../../Reducers/PostAction";
import { connection } from "../Hubs";

import { postSlice } from "../../../Reducers/postSlice";
import store from "../../../store";
export const AddPostConnection = async ({idGroup,postContent},dispatch) =>{

    try{
        
        connection.on("ReceiveMessagePost",(post) =>{
            console.log("day la trong AddPostConnention",post)
            if(post.success)
                {
                    dispatch(addPost(post.object))
                    console.log(post.object)
                }
                else{
                    console.log("post Null")
                }
            });
        await connection.invoke("AddPostHub",{idGroup:null,postContent:postContent})
    }
    catch(e)
    {
        console.log(e)
    }
}

export const UpdateLikePostConnection = async(idPost) =>{
    console.log(idPost)
    try{
        
        await connection.invoke("UpdateLikePost",{idPost:idPost})

        
    }
    catch(e)
    {
        console.log(e)
    }
}

connection.on("ReceiveMessage",(likePost) =>{
    if(likePost.success)
        {
            console.log(likePost)
            store.dispatch(postSlice.actions.updateLikePost(likePost.object,idPost))
            
        }
        else{
            console.log("post Null")
        }
 });

connection.on("MessageError",(string) =>{
    console.log(string)
})
