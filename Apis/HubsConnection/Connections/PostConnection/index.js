import { connection } from "../../Hubs";
import { compress} from "../../../../Helper/ImageHelper";
import { updateLikeCaller,updateLikeCallerPost,updateLikeOthers,addPost } from "../../../../ContextRedux/Actions/postActions";
import store from "../../../../ContextRedux/Store";

export const AddPostConnection = async ({idGroup,postContent,listImage}) =>{

    try{
       
        const listString64Base = [];
        listImage.forEach((item) =>{
            listString64Base.push(compress(item[0].base64))
        })
       
        await connection.invoke("AddPostHub",{idGroup:5,postContent:postContent,string64BaseImage:listString64Base})
    }
    catch(e)
    {
        console.log(e)
    }
}

export const UpdateLikePostConnection = async(idPost) =>{
    try{     
        await connection.invoke("UpdateLikePost",{idPost:idPost})
    }
    catch(e)
    {
        console.log(e)
    }
}

    connection.on("ReceiveMessageCaller",(likePost,idPost,idString) =>{
            
        if(likePost.success)
            {
                store.dispatch(updateLikeCaller(likePost.object,idPost))
                if(store.getState().post.PostCurrent.idPost == idPost)
                    store.dispatch(updateLikeCallerPost(likePost.object))
            }
            else{
                console.log("post Null")
            }
        });
        connection.on("ReceiveMessageOthers",(likePost,idPost,idString) =>{
            
            if(likePost.success)
                {
                    store.dispatch(updateLikeOthers(likePost.object,idPost))
                    if(store.getState().post.PostCurrent.idPost == idPost)               
                        store.dispatch(updateLikeCallerPost(likePost.object))
                }
                else{
                    console.log("post Null")
                }
            });

        
connection.on("ReceiveMessagePost",(post) =>{
        console.log("day la trong AddPostConnention",post)
        if(post.success)
            {
                store.dispatch(addPost(post.object))
                console.log("day la Post provider:",post.object)
            }
            else{
                console.log("post Null")
            }
        });
    

connection.on("MessageError",(string) =>{
    console.log(string)
})
