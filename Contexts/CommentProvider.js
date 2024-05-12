import {createContext } from "react"

export const CommentContext = createContext()

export default function CommentProvider({children,IdPost,listComment})
{   
  
    const obj = {
        comments: listComment,
        IdPost:IdPost
    }
    
    return(
        <CommentContext.Provider value={obj}>
            {children}
        </CommentContext.Provider>
    )
}