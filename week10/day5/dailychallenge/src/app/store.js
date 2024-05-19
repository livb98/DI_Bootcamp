import { configureStore } from "@reduxjs/toolkit";
import TasksReducer from '../features/taskSlice'


export default configureStore({
    reducer: {
        TasksReducer
    }
})