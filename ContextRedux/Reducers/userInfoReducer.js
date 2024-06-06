import { UPDATE_USERINFO,GET_USERINFO,GET_CURRENT_USERID,GET_SEARCH_ITEM } from "../Actions/userInfoActions"

export const initUserInfoState = {
    CurrentUserID:0,
    Search:[],
    UserInfo:{
        idUser:0,
        userName:"",
        userDescription:"",
        isCurrentUser:false,
        avatarImage:"",
        coverImage:""
    }
}

export default userInfoReducer = (state = initUserInfoState,action) =>{

    switch(action.type)
    {
        case GET_USERINFO:
            
            const {idUser,isCurrentUser,userDescription,userName,coverImage,avatarImage} = action.payload 
            return{
                ...state,
                UserInfo:{
                    idUser:idUser,
                    userName:userName,
                    userDescription:userDescription,
                    isCurrentUser:isCurrentUser,
                    coverImage:coverImage,
                    avatarImage:avatarImage

                }
            }
        case GET_CURRENT_USERID:
            return {
                ...state,
                CurrentUserID:action.payload
            }
        case GET_SEARCH_ITEM:
            console.log("Day la UserInfoReducer: ",action.payload)
            return {
                ...state,
                Search:action.payload
            }
        default:
            return state
    }
}