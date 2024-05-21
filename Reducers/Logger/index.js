import  PostReducer  from "../PostReducer"

export default function Logger () {
    return(preState,action) =>{
        console.group(action.type)
        console.log("preState: ",preState.Posts[1])

        const nextState = PostReducer(preState,action)

        console.log("newState: ",nextState.Posts[1])
        console.groupEnd()
        return nextState
    }
}