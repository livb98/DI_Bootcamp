import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../features/exercise1/TodoSlice'
import plannerReducer from  '../features/exercise2/plannerSlice'

// // exercise1
// export default configureStore({
//     reducer:{
//         todoReducer
//     }
// })

// exercise2
export default configureStore({
    reducer:{
        plannerReducer
    }
})