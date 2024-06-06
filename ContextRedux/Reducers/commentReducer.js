import { GET_COMMENTS,ADD_COMMENT } from "../Actions/commentActions"
export const InitCommentState = {
    Comments:[],
    
}
export default commentReducer = (state = InitCommentState,action) =>{
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
            return state;
    }
}
