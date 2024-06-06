import { combineReducers } from "redux";
import postReducer from "./postReducer";
import userInfoReducer from "./userInfoReducer";
import commentReducer from "./commentReducer";

const reducer = combineReducers({
    post:postReducer,
    userInfo:userInfoReducer,
    comment:commentReducer,
})
export default reducer