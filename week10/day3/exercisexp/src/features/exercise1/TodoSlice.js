import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

const initialState = {
    task: [],

}

export const TodoSlice = createSlice({
    name: 'task',
    initialState: initialState,
    reducers: {
        addtask: (state, action) => {
            state.task.push({id:nanoid(), name: action.payload, completed: false})
        },
        completetask : (state, action) => {
            console.log(action);
            // state.task = state.task.map(task => {
            //     return task.id === action.payload
            //     ? {...task, completed: !task.completed}
            //     : task
            // })
            state.task[action.payload].completed = !state.task[action.payload].completed
        },
        removetask: (state, action) => {
            state.task = state.task.filter(task => {
                task.id !== action.payload
            })
            state.task.slice(state.task,1)
        }
    }
})

export const { 
    addtask,
    completetask,
    removetask,
} = TodoSlice.actions

export default TodoSlice.reducer