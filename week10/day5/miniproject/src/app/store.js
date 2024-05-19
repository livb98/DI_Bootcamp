import { configureStore } from "@reduxjs/toolkit";
import bookReducer from '../features/Books/bookSlice'

export default configureStore({
    reducer: {
        bookReducer
    }
})