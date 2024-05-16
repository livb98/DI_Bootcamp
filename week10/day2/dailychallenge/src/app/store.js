import  {configureStore} from '@reduxjs/toolkit'
import  { taskReducer } from '../features/Task/Reducer.js'

export default configureStore({
    reducer:{
        taskReducer,
    }
})
