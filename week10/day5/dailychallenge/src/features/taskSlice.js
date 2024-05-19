import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
}

export const taskSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
        addtask: (state, action) => {
            state.tasks.push({ id: nanoid(), name: action.payload.name, completed: false });
        },
        completetask : (state, action) => {
            console.log(action);
            state.tasks[action.payload].completed = !state.tasks[action.payload].completed
        },
        removetask: (state, action) => {
            state.tasks = state.tasks.filter(task => {
                task.id !== action.payload
            })
            state.tasks.slice(state.tasks,1)
        }
    }


})

export const {addtask, completetask, removetask} = taskSlice.actions
export default taskSlice.reducer