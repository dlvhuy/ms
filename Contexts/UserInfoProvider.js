import UserInfoReducer,{initUserInfoState} from "../Reducers/UserInfoReducer"
import { createContext, useReducer } from "react"

export const UserInfoContext = createContext()
export default function UserInfoProvider({children})
{   
    const [stateUserInfo,dispatchUserInfo] = useReducer(UserInfoReducer,initUserInfoState)
    
    
    return(
        <UserInfoContext.Provider value={[stateUserInfo,dispatchUserInfo]}>
            {children}
        </UserInfoContext.Provider>
    )
}