import {legacy_createStore} from "redux";
import RootReducer from "../Reducers/RootReducer";


const Store = legacy_createStore(RootReducer);

export default Store

