import { combineReducers } from "redux";
import postReducer from "./postReducer";
import userInfoReducer from "./userInfoReducer";
import commentReducer from "./commentReducer";
import notificationReducer from "./notificationReducer";

const reducer = combineReducers({
    post:postReducer,
    userInfo:userInfoReducer,
    comment:commentReducer,
    notification:notificationReducer
})
export default reducer