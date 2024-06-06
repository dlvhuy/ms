export const UPDATE_LIKE_CALLER = 'Update_Like_Caller'
export const UPDATE_LIKE_OTHERS = 'Update_Like_Others'
export const UPDATE_LIKE_CALLER_POST = 'Update_Like_Caller_Post'
export const UPDATE_LIKE_CALLER_POST2 = 'Update_Like_Caller_Post2'
export const ADD_POST = 'Add_Post'
export const GET_POSTS = 'Get_Posts'
export const GET_POST = 'Get_Post'
export const GET_POST2 = 'Get_Post2'

export const updateLikeCaller = (object_c, idPost_c) => ({
        type: UPDATE_LIKE_CALLER,
        payload: { object_c, idPost_c }
})
export const updateLikeCallerPost = (object_cp) => ({

    
        type: UPDATE_LIKE_CALLER_POST,
        payload: { object_cp }
    
})
export const getPost2 = (payload) => ({
        type: GET_POST2,
        payload
    
})
export const updateLikeOthers = (object_o, idPost_o) => ({
        type: UPDATE_LIKE_OTHERS,
        payload: { object_o, idPost_o }
    
})
export const addPost = (payload) => ({
        type: ADD_POST,
        payload  
})
export const getPosts = (payload) => ({
        type: GET_POSTS,
        payload
    
})
export const getPost = (payload) => ({
        type: GET_POST,
        payload
})
