import { connection } from "../Hubs";

export const AddPostConnection = async ({idGroup,PostContent}) =>{

    try{
        await connection.invoke("AddPostHub",{idGroup:null,PostContent:"Hellowotld"})
    }
    catch(e)
    {
        console.log(e)
    }
}

connection.on("ReceivePostResponse",(post) =>{
    if(post.success)
        console.log(post.object)
    else{
        console.log("post Null")
    }
});

connection.on("MessageError",(string) =>{
    console.log(string)
})
