// import { connection } from "../../Hubs"
// import store from "../../../../ContextRedux/Store"
// import { addNotification } from "../../../../ContextRedux/Actions/notificationActions"

// connection.on("ReceiveNotificationForPostUser",(msg) =>{
//     console.log("day la Notification connection:", msg)
//     if(msg.success){
//         store.dispatch(addNotification(msg.object))
//         console.log("day la o trong notification: ",msg.object)
//     }
// });