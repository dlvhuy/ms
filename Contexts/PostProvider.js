import {createContext, useEffect, useReducer } from "react"
import  PostReducer, {initPostState2 } from "../Reducers/PostReducer"
import Logger from "../Reducers/Logger"
import { updateLikeCaller,updateLikeOthers } from "../Reducers/PostAction"
import { connection } from "../Apis/HubsConnection/Hubs"
export const PostContext = createContext()

export default function PostProvider({children})
{   
    const [statePost,dispatchPost] = useReducer(PostReducer,initPostState2)
    
    {connection.on("ReceiveMessageCaller",(likePost,idPost,idString) =>{
            
        if(likePost.success)
            {
                console.log(likePost,idPost,idString)
                dispatchPost(updateLikeCaller(likePost.object,idPost))
                
            }
            else{
                console.log("post Null")
            }
        });
        connection.on("ReceiveMessageOthers",(likePost,idPost,idString) =>{
            
            if(likePost.success)
                {
                    console.log(likePost,idPost,idString)
                    dispatchPost(updateLikeOthers(likePost.object,idPost))
                    
                }
                else{
                    console.log("post Null")
                }
            });
            
    }
    return(
        <PostContext.Provider value={[statePost,dispatchPost]}>
            {children}
        </PostContext.Provider>
    )
}