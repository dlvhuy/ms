import { API_URL } from "../..";
import { getValueFor } from "../../../expoSecure/Secure";
import { getPosts } from "../../../ContextRedux/Actions/postActions";
import { GetSearchItems,GetUserInfo } from "../../../ContextRedux/Actions/userInfoActions";
import store from "../../../ContextRedux/Store";
export const getUserInfo = async (idUser,navigation) =>{
    console.log("day la get UserInfo:",idUser)
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
           
            if(jsonResponseGetUserInfo.success){
                const {idUser,isCurrentUser,userDescription,userName,postResponses,coverImage,avatarImage} = jsonResponseGetUserInfo.object;
                store.dispatch(GetUserInfo(idUser,isCurrentUser,userDescription,userName,coverImage,avatarImage))
                store.dispatch(getPosts(postResponses))
                navigation.navigate("UserInfomation")
            }
    }
    catch(error){
        console.log(error)
    }
}

export const searchUserInfo = async(searchString) =>
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
                store.dispatch(GetSearchItems(jsonResponseSearchUserInfo.object))
            }

    }
    catch(error){
        console.log(error)
    }
}