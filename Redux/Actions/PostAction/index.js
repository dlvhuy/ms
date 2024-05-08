export const IS_LIKE = 'Is_like'
export const ADD_POST = 'Add_Post'
export const GET_POSTS = 'Get_Posts'

export const isLike = (payload) =>{
    
    return {
        type: IS_LIKE,
        payload
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