import { GET_POSTS,ADD_POST } from "../../Actions/PostAction"
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



export const PostReducer2 = (state ,action) =>{
    
    let newState
   
    switch(action.type)
    {
        // case IS_LIKE:
        //     const newArray = [...state.Posts];
        //     newArray.forEach(element => {
        //         if(element.IdPost == action.payload)
        //         {
        //             if(element.IsLike)
        //             {
        //                 element.IsLike = false
        //                 element.TotalLike = element.TotalLike - 1
        //             }
        //             else
        //             {
        //                 element.IsLike = true
        //                 element.TotalLike = element.TotalLike + 1
        //             }
        //         }
        //     });
        //     newState ={
        //        ...state,
        //        Posts:newArray
        //     }        
            // break;
        case GET_POSTS:
            newState ={
                ...state,
                Posts:action.payload
            }
            break

        case ADD_POST:
            newState={
                ...state,
                Posts:[...state.Posts,action.payload]
            }
            break
            
        default:
            throw new Error("Invalid action")
    }
    console.log("new state: ",newState)

    return newState
}