import { API_URL } from "../..";
import { getValueFor } from "../../../expoSecure/Secure";
import { getPosts } from "../../../Reducers/PostAction";
import { GetSearchItems, GetUserInfo } from "../../../Reducers/UserInfoAction";
export const getUserInfo = async (idUser,navigation,dispatchUserInfo,dispatchPost) =>{
   
    try{
        const responseGetUserInfo = await fetch(
            `${API_URL}/api/UserInfo/${idUser}`,
            {
                method:'Get',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization': `Bearer ${getValueFor("JWT_TOKEN")}`
                },
            });
            
            const jsonResponseGetUserInfo = await responseGetUserInfo.json();
            console.log(jsonResponseGetUserInfo)
            if(jsonResponseGetUserInfo.success){
                const {idUser,isCurrentUser,userDescription,userName,postResponses,coverImage,avatarImage} = jsonResponseGetUserInfo.object;
                dispatchUserInfo(GetUserInfo(idUser,isCurrentUser,userDescription,userName,coverImage,avatarImage))
                dispatchPost(getPosts(postResponses))
                navigation.navigate("UserInfomation")
            }
    }
    catch(error){
        console.log(error)
    }
}

export const searchUserInfo = async(searchString,dispatchUserInfo) =>
{
    console.log("day la searchUserInfo: ",searchString)
    try{
        const responseSearchUserInfo = await fetch(
            `${API_URL}/api/UserInfo/${searchString}`,
            {
                method:'post',
                headers:{
                    'Content-Type':'application/json',
                    'Authorization': `Bearer ${getValueFor("JWT_TOKEN")}`
                },
                body:JSON.stringify({
                    SearchString:searchString
                }),
               
            });
            
            const jsonResponseSearchUserInfo = await responseSearchUserInfo.json();
            console.log(jsonResponseSearchUserInfo)
            if(jsonResponseSearchUserInfo.success)
            {
                dispatchUserInfo(GetSearchItems(jsonResponseSearchUserInfo.object))
            }

    }
    catch(error){
        console.log(error)
    }
}