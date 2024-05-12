import  PostReducer2  from "../postSlice"

export default function Logger () {
    return(preState,action) =>{
        console.group(action.type)
        console.log("preState: ",preState)

        const nextState = PostReducer2(preState,action)

        console.log("newState: ",nextState)
        console.groupEnd()
        return nextState
    }
}