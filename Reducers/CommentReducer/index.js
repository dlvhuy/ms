import dataComment from "../../Data/dulieuComment.json"

export const InitCommentState = {
    Comments:[],
    
}

export const ADD_COMMENT = 'Add_Comment'
export const GET_COMMENTS = 'Get_Comment'

export const addComment = (payload) =>{
    
    return {
        type: ADD_COMMENT,
        payload
    }
}

export const getComments = (payload) =>{

    return {
        type:GET_COMMENTS,
        payload
    }
}

export const CommentReducer = (state,action) =>{

    

    switch(action.type)
    {
        case GET_COMMENTS:
            return{
                ...state,
                Comments:action.payload
            }
            
        case ADD_COMMENT:
            return{
                ...state,
                Comments:[...state.Comments,action.payload]
            }
           
        default:
            throw new Error("Invalid action")
    }
    

}
