import { ADD_NOTIFICATION,GET_ALL_NOTIFICATION,DELETE_NOTIFICATION } from "../Actions/notificationActions"
export const InitNotificationState = {
    Notifications:[],
};
export default notificationReducer = (state = InitNotificationState,action) =>{
    switch(action.type)
    {
        case GET_ALL_NOTIFICATION:
            return{
                ...state,
                Notifications:action.payload
            };
        case ADD_NOTIFICATION:
            return{
                ...state,
                Notifications:[action.payload,...state.Notifications]
            };
         case DELETE_NOTIFICATION:
            const newListNotificationAfterDelete = [...state.Notifications]
            newListNotificationAfterDelete.map(item => {
                if(item.idNotification == action.payload.idNotification)
                {
                    const Index = newListNotificationAfterDelete.indexOf(item)
                    console.log("Index của deleteNotification trong Notifications: ",Index)
                    newListNotificationAfterDelete.splice(Index,1);
                }
            })
            return{
                ...state,
                Notifications:newListNotificationAfterDelete
            };
        default:
            return state;
    }
}
