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