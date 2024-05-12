import { configureStore } from "@reduxjs/toolkit";
import { postSlice } from "../Reducers/postSlice";

const store = configureStore({
    reducer:{
        Post:postSlice.reducer,
    },
})

export default store;