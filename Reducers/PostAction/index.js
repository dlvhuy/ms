export const UPDATE_LIKE = 'Update_Like'
export const ADD_POST = 'Add_Post'
export const GET_POSTS = 'Get_Posts'

export const updateLike = (object,idPost) =>{
   
    return {
        type: UPDATE_LIKE,
        payload:{object,idPost}
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