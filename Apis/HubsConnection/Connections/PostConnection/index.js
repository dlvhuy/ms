import { connection,connectionSystem } from "../../Hubs";
import { compress} from "../../../../Helper/ImageHelper";
import { updateLikeCaller,updateLikeCallerPost,updateLikeOthers,addPost } from "../../../../ContextRedux/Actions/postActions";
import { addNotification } from "../../../../ContextRedux/Actions/notificationActions";
import store from "../../../../ContextRedux/Store";

//old Connection
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
    
connection.on("ReceiveNotification",(msg) =>{
    console.log("day la Notification connection:", msg)
    if(msg.success){
        store.dispatch(addNotification(msg.object))
        console.log("day la o trong notification: ",msg.object)
    }
});

connection.on("MessageError",(string) =>{
    console.log(string)
})
