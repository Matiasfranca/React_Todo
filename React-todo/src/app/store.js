import { configureStore } from "@reduxjs/toolkit";
import listReducer from "../features/listReducers/listReducerSlice";

const store = configureStore({
    reducer: {
        list: listReducer
    }
})

export default store