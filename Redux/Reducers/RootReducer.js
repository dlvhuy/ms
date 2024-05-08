import { combineReducers } from "redux";
import { PostReducer2 } from "./PostReducer/PostReducer2";

const RootReducer = combineReducers({
    Post:PostReducer2
})

export default RootReducer;