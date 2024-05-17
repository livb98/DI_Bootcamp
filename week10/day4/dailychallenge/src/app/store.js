import { configureStore } from "@reduxjs/toolkit";
import ageReducer from '../features/ageSlice'

const store = configureStore({
    reducer:
        {ageReducer}
})

export default store