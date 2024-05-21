export const UPDATE_LIKE_CALLER = 'Update_Like_Caller'
export const UPDATE_LIKE_OTHERS = 'Update_Like_Others'
export const ADD_POST = 'Add_Post'
export const GET_POSTS = 'Get_Posts'

export const updateLikeCaller = (object_c,idPost_c) =>{
   
    return {
        type: UPDATE_LIKE_CALLER,
        payload:{object_c,idPost_c}
    }
}
export const updateLikeOthers = (object_o,idPost_o) =>{
   
    return {
        type: UPDATE_LIKE_OTHERS,
        payload:{object_o,idPost_o}
    }
}
export const addPost =(payload) =>{
    return {
        type:ADD_POST,
        payload
    }
}
export const getPosts =(payload) =>{
    return {
        type:GET_POSTS,
        payload
    }
}