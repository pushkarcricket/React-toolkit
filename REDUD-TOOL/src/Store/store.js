import { configureStore } from "@reduxjs/toolkit";
import todoReducer from './Reducer/todoslice'

const store=configureStore(
    {
        reducer: todoReducer
    }
)


export export store;