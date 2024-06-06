export const GET_USERINFO = "Get_UserInfo"
export const UPDATE_USERINFO = "Update_UserInfo"
export const GET_CURRENT_USERID = "Get_Current_UserId"
export const GET_SEARCH_ITEM = "Get_Search_Item"

export const GetUserInfo = (idUser,isCurrentUser,userDescription,userName,coverImage,avatarImage) =>{
    console.log("day la get UserInfo: ",idUser,isCurrentUser,userDescription,userName)
    return {
        type: GET_USERINFO,
        payload:{idUser,isCurrentUser,userDescription,userName,coverImage,avatarImage}
    }
}

export const UpdateUserInfo = (UserInfo) =>{
    return{
        type: UPDATE_USERINFO,
        payload:UserInfo
    }
}
export const GetCurrentUserId = (id) =>{
    return {
        type:GET_CURRENT_USERID,
        payload:id
    }
}
export const GetSearchItems = (payload) =>{
    console.log("Day la GetStSearchItem: ",payload)
    return {
        type:GET_SEARCH_ITEM,
        payload
    }
}