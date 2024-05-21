import { GET_POSTS,ADD_POST,UPDATE_LIKE_CALLER, UPDATE_LIKE_OTHERS } from "../PostAction"

export const initPostState2 = {
    Posts:[],
    Post:{
        idPost:0,
        idUser:0,
        userName:"",
        idGroup:null,
        postContent:""
    }
}



export default function PostReducer(state,action){
    
    
    switch(action.type)
    {
        case UPDATE_LIKE_CALLER:
            const {object_c,idPost_c} = action.payload
            console.log("đay la updateLikeCaller:",object_c," ",idPost_c)
            const updatePost = state.Posts.map((post) =>{
                if(post.idPost === idPost_c)
                    return {
                        ...post,
                        likePost:object_c
                    }
                return post
            })
           return {
            ...state,
            Posts:updatePost
           }
        case UPDATE_LIKE_OTHERS:
            const {object_o,idPost_o} = action.payload
            console.log("đay la updateLikeother:",object_o," ",idPost_o)
            const updatePost_other = state.Posts.map((post) =>{
                if(post.idPost === idPost_o)
                    return {
                        ...post,
                        likePost:{
                            ...post.likePost,
                            totalLikes:object_o
                        }
                    }
                return post
            })
           return {
            ...state,
            Posts:updatePost_other
           }
        case GET_POSTS:
            return{
                ...state,
                Posts:action.payload
            }
            
        case ADD_POST:
            return{   
                ...state,
                Posts:[...state.Posts,action.payload]
            }
        default:
            throw new Error("Invalid action")
    }
    
}

// export const postSlice = createSlice({
//     name:"posts",
//     initialState:{
//         Posts:[],
//         Post:{
//             idPost:0,
//             idUser:0,
//             userName:"",
//             idGroup:null,
//             postContent:""
//         }
//     },
//     reducers:{
//         addPost:(state,action) =>{
//             state.Posts.push(action.payload)
//         },
//         getPosts:(state,action) =>{
//             state.Posts = action.payload
//         },
//         updateLikePost:(state,action) =>{
//             const {object,idPost} = action.payload
//             const currentPost = state.Posts.filter(post => post.idPost == idPost)
//             currentPost.likePost = object
//         }
//     }

// })