import { save } from "../../expoSecure/Secure";
import { API_URL } from "..";
import { AllPosts } from "../Posts/AllPosts";
import { startConnection } from "../HubsConnection/Connections/Connections";

import { getPosts } from "../../Reducers/postSlice";
import store from "../../store";


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
            console.log(json.token)
            save("JWT_TOKEN",json.token)

            probs.navigation.navigate("Home")
            startConnection().then(() =>{
                
            })
            AllPosts()
            
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

    
    
   
