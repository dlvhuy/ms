import {createContext, useEffect, useReducer } from "react"
import  PostReducer2, {initPostState2 } from "../Reducers/postSlice"
import Logger from "../Reducers/Logger"
export const PostContext = createContext()

export default function PostProvider({children})
{   
    const [state,dispatch] = useReducer(PostReducer2,initPostState2)
   
    return(
        <PostContext.Provider value={[state,dispatch]}>
            {children}
        </PostContext.Provider>
    )
}