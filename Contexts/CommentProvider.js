import {createContext, useContext, useReducer } from "react"
import { connection } from "../Apis/HubsConnection/Hubs"
import { CommentReducer, InitCommentState, addComment, getComments } from "../Reducers/CommentReducer"

export const CommentContext = createContext()

export default function CommentProvider({children,IdPost})
{   
    const [state,dispatch] = useReducer(CommentReducer,InitCommentState)
    
    
    {
    connection.on("ReceiveMessagePostCommentGroup",(msg) =>{
        if(msg.success){
            dispatch(getComments(msg.object))
            console.log("day la o trong Comment Provider1: ",msg.object)
        }
    })
    
    connection.on("ReceiveCommentPost",(msg) =>{
        if(msg.success){
            dispatch(addComment(msg.object))
            console.log("day la o trong Comment Provider2: ",msg.object)
        }
    })

}
    return(
        <CommentContext.Provider value={[state,dispatch,IdPost]}>
            {children}
        </CommentContext.Provider>
    )
}