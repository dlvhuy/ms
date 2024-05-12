import dataComment from "../../Data/dulieuComment.json"

export const InitCommentState = {
    Comments:[],
    AllComments:dataComment
}

export const ADD_COMMENT = 'Add_Comment'
export const GET_COMMENTS = 'Get_Comment'

export const addComment = (comment) =>{
    
    return {
        type: ADD_COMMENT,
        payload: comment
    }
}

export const getComments = (payload) =>{
    return {
        type:GET_COMMENTS,
        payload
    }
}

export const CommentReducer = (state,action) =>{

    let newState;

    switch(action.type)
    {
        case GET_COMMENTS:
            const DataComment = [...state.AllComments] 
            const filerComment = DataComment.filter((item) =>{
                if(item.IdPost == action.payload)
                    return true
                return false
            })

            newState = {
                ...state,
                Comments:filerComment
            }
            break;
            
        case ADD_COMMENT:
            newState = {
                ...state,
                AllComments:[...state.AllComments,action.payload]
            }
            break;
        default:
            throw new Error("Invalid action")
    }
    console.log("newstate: ",newState)
    return newState;
}
