import { save } from "../../expoSecure/Secure";
import { API_URL } from "..";
import { AllPosts } from "../Posts/AllPosts";
import { startConnection } from "../HubsConnection/Connections/Connections";
import { useReducer } from "react";
import { getPosts } from "../../Redux/Reducers/PostReducer/PostReducer2";


// tạo nơi an toàn để có thể lưu jwt
// kết nối react vs signal R cho tạo bài viết và tạo comment
// chỉnh sửa thông tin user
// tạo trang có form tạo nhóm
export const postLoginData = async (probs,loginInputText,dispatch) => {
    console.log(loginInputText)
    
    try {
        const response = await fetch(
            `${API_URL}/api/SignUp/SignIn`,
            {
                method:'post',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    emailUser:loginInputText.UserName,
                    passwordUser:loginInputText.PassWord
                })
            });
        const json = await response.json();
        
        if(json.success == true){
            
            save("JWT_TOKEN",json.token)

            startConnection().then(() =>{
                
            })
            
            AllPosts().then((response) => 
                dispatch(getPosts(response))
            )
            probs.navigation.navigate("Home")
        }
        else {
            console.log(json.Message)
        }
    }
    catch(error)
    {
        console.log(error)
    }
}

    
    
   
