import { GET_POSTS,ADD_POST,UPDATE_LIKE } from "../PostAction"
import { createSlice } from "@reduxjs/toolkit"
// export const initPostState2 = {
//     Posts:[],
//     Post:{
//         idPost:0,
//         idUser:0,
//         userName:"",
//         idGroup:null,
//         postContent:""
//     }
// }



// export default function PostReducer2(state = initPostState2,action){
    
    
//     switch(action.type)
//     {
//         case UPDATE_LIKE:
//             const {object,idPost} = action.payload
//             const updatePost = state.Posts.map((post) =>{
//                 if(post.idPost === idPost)
//                     return {
//                         ...post,
//                         likePost:object
//                     }
//                 return post
//             })
//            return {
//             ...state,
//             Posts:updatePost
//            }
//         case GET_POSTS:
//             return{
//                 ...state,
//                 Posts:action.payload
//             }
            
//         case ADD_POST:
//             return{   
//                 ...state,
//                 Posts:[...state.Posts,action.payload]
//             }
//         default:
//             throw new Error("Invalid action")
//     }
    
// }

export const postSlice = createSlice({
    name:"posts",
    initialState:{
        Posts:[],
        Post:{
            idPost:0,
            idUser:0,
            userName:"",
            idGroup:null,
            postContent:""
        }
    },
    reducers:{
        addPost:(state,action) =>{
            state.Posts.push(action.payload)
        },
        getPosts:(state,action) =>{
            state.Posts = action.payload
        },
        updateLikePost:(state,action) =>{
            const {object,idPost} = action.payload
            const currentPost = state.Posts.filter(post => post.idPost == idPost)
            currentPost.likePost = object
        }
    }

})