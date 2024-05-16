import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

// export const dateThunk = createAsyncThunk('date/select', (date)=> {
//     return new Promise((res,rej) => {
//         res(date)
//     })
// })

const initialState = {
    task: []
}

export const plannerSlice = createSlice({
    name: 'planner',
    initialState: initialState,
    reducers: {
        addtask: (state, action) => {
            state.task.push({id:nanoid(), name: action.payload.name, completed: false, date: action.payload.date})
        },
        filtertask: (state, action) => {
            state.task.filter(task => task.date !== action.payload.date);
        }
    },

})

export const {
    addtask,
    selectdate,
    filtertask
} = plannerSlice.actions
export default plannerSlice.reducer