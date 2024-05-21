import { connection } from "../../Hubs"

export const CommentPostConnection = async(isOpen,idPost) =>{
///chưa kip reder lại nên isOpen ngược lại nên là nó bị ngược
    console.log("day la o trong CommentPostConnection: ",isOpen,idPost)
    try{
        await connection.invoke("TogleGroupCommentPost",{idPost:idPost,isOpen:isOpen})
        // await connection.invoke("AddPostHub",{idGroup:null,postContent:postContent})
       
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

    }
}