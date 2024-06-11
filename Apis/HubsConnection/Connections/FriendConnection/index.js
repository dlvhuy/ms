
import store from "../../../../ContextRedux/Store"
import { addNotification,deleteNotification } from "../../../../ContextRedux/Actions/notificationActions"
import { updateFriendState } from "../../../../ContextRedux/Actions/userInfoActions"
import { connection } from "../../Hubs"

export const SendFriendRequestConnection = async(idFriend) =>{

    console.log("day la o trong SendFriendRequest: ",idFriend)
    try{ await connection.invoke("SendFriendRequest",idFriend) }
    catch(e){console.log(e)}
}

export const ResponseFriendRequestConnection = async(idFriend,isAccept) =>{
    console.log("day la o trong ResponseFriendRequestConnection: ",idFriend," ",isAccept)
    try{ await connection.invoke("ResponseFriendRequest",idFriend,isAccept)}
    catch(e){console.log(e)}
}

connection.on("ReceiveDeleteNotification",(msg) =>{
    console.log("day la Notification connection:", msg)
    console.log("day la Notification connection:", store.getState().notification.Notifications)
    if(msg.success){
        if(store.getState().notification.Notifications)
        {
            store.dispatch(deleteNotification(msg.object))
            console.log("day la o trong ReceiveDeleteNotification: ",msg.object)
        }
    }
});

connection.on("UpdateFriendState",(msg) =>{
    console.log("day la UpdateFriendState:", msg)
    if(msg.success){
        store.dispatch(updateFriendState(msg.object))
        console.log("day la o trong UpdateFriendState: ",msg.object)
    }
});