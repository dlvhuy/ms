import { save } from "../../../expoSecure/Secure";
import { API_URL } from "../..";
import { AllPosts } from "../Posts/AllPosts";
import { startConnection } from "../../HubsConnection/Connections/Connections";
import { GetCurrentUserId } from "../../../ContextRedux/Actions/userInfoActions";
import store from "../../../ContextRedux/Store";

// tạo nơi an toàn để có thể lưu jwt
// kết nối react vs signal R cho tạo bài viết và tạo comment
// chỉnh sửa thông tin user
// tạo trang có form tạo nhóm
export const postLoginData = async (probs,loginInputText) => {
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
                    emailUser:"Vanhuy098420@gmail.com",
                    passwordUser:"123456"
                })
            });
        const json = await response.json();
        
        if(json.success == true){
            console.log("day la json trong PostLogiData: ",json)
            save("JWT_TOKEN",json.token)

            startConnection().then(() =>{
                
            })
            store.dispatch(GetCurrentUserId(json.idCurrentUser))
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

export const Register = async (navigate,registerInputText) =>{
    try{
        const RegisterResponse = await fetch(
            `${API_URL}/api/SignUp/SignUp`,
            {
                method:'post',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    userName:registerInputText.UserName,
                    emailUser:registerInputText.Email,
                    passwordUser:registerInputText.PassWord
                })
            });
            const jsonResponse = await RegisterResponse.json()
            
            return jsonResponse
            
        
            
           
    }
    catch(error)
    {
        console.log(error)
    }
}

    
    
   
