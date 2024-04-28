import axios from 'axios'
export const postLoginData = async () =>{
    try {
        const response = await fetch(
            "https://localhost:7265/api/SignUp/SignIn",
            {
                method:'post',
                headers:{
                    'Content-Type':'application/json'
                },
                body:JSON.stringify({
                    emailUser:"string",
                    passwordUser:"string"
                })
            });
        const json = await response.json();
        console.log(json)
                
    }
    catch(error)
    {
        console.log(error)
    }
}

export const postLoginDataAxios = async () =>{
    try{
        const res = await axios.get('https://192.168.101.5:7265/api/Post')
           
        .then((response) => console.log(response))
        .catch((error) => console.log(error))
    }
    catch(error)
    {
        console.log(error)
    }
}
    
    
   
