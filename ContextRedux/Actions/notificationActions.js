export const GET_ALL_NOTIFICATION = "Get_All_Notification";
export const ADD_NOTIFICATION = "Add_Notification";
export const DELETE_NOTIFICATION = "Delete_Notification"

export const getAllNotification = (payload) => ({
    type: GET_ALL_NOTIFICATION,
    payload
})

export const addNotification = (payload) => ({
    type: ADD_NOTIFICATION,
    payload
})

export const deleteNotification = (payload) => ({
    type: DELETE_NOTIFICATION,
    payload
})