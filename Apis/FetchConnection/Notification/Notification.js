import { getAllNotification } from "../../../ContextRedux/Actions/notificationActions";
import { getValueFor } from "../../../expoSecure/Secure";
import store from "../../../ContextRedux/Store";
import { API_URL } from "../..";
export const AllNotifications = async () =>{
    try {
        const response = await fetch(`${API_URL}/api/Notification/GetNotifications`,{
            method:'Get',
            headers:{
                "Content-Type": 'application/json',
                'Authorization': `Bearer ${getValueFor("JWT_TOKEN")}`, 
            },
        });

        const json = await response.json();
        console.log("day la ALlNotification: ",json)
        store.dispatch(getAllNotification(json))
        
    }
    catch(error)
    {
        console.log(error)
    }
}

