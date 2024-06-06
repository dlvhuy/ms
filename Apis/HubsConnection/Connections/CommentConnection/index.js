import { connection } from "../../Hubs"
import { addComment,getComments } from "../../../../ContextRedux/Actions/commentActions"
import store from "../../../../ContextRedux/Store"
export const CommentPostConnection = async(isOpen,idPost) =>{
///chưa kip reder lại nên isOpen ngược lại nên là nó bị ngược
    console.log("day la o trong CommentPostConnection: ",isOpen,idPost)
    try{
        if(isOpen == true)
            {
                await connection.invoke("TogleGroupCommentPost",{idPost:idPost,isOpen:isOpen})
            }       
    }catch(e)
    {
        console.log(e)
    }
}

export const AddCommentPostConnection = async(comment) =>{
    console.log(comment)
    try{
        await connection.invoke("AddCommentInPost",{contentCommentPost:comment.CommentContent,idPost:comment.IdPost})
    }
    catch(e)
    {
        console.log(e)
    }
}

connection.on("ReceiveMessagePostCommentGroup",(msg) =>{
    if(msg.success){
        store.dispatch(getComments(msg.object))
        console.log("day la o trong Comment Provider1: ",msg.object)
    }
})

connection.on("ReceiveCommentPost",(msg) =>{
    if(msg.success){
        store.dispatch(addComment(msg.object))
        console.log("day la o trong Comment Provider2: ",msg.object)
    }
})