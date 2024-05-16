// import { createSlice, createAsyncThunk, nanoid } from "@reduxjs/toolkit";

// const initialState = {
//     task: []
// };

// export const plannerSlice = createSlice({
//     name: 'planner',
//     initialState: initialState,
//     reducers: {
//         addtask: (state, action) => {
//             state.task.push({ id: nanoid(), name: action.payload.name, completed: false, date: action.payload.date });
//         },
//         filtertasksbydate: (state, action) => {
//             state.task = state.task.filter(task => task.date === action.payload.date);
//         },
//         deletetask: (state, action) => {
//             state.task = state.task.filter(task => task.id !== action.payload.id);
//             state.task.slice(state.task.id,1)
//         },
//     }
// });

// export const { addtask, filtertasksbydate, deletetask } = plannerSlice.actions;
// export default plannerSlice.reducer;
import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    tasks: []
};

export const plannerSlice = createSlice({
    name: 'planner',
    initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({ id: nanoid(), name: action.payload.name, completed: false, date: action.payload.date });
        },
        editTask: (state, action) => {
            const { id, name } = action.payload;
            const task = state.tasks.find(task => task.id === id);
            if (task) {
                task.name = name;
            }
        },
        deleteTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload.id);
        },
        filterTasksByDate: (state, action) => {
            state.tasks = state.tasks.filter(task => task.date === action.payload.date);
        }
    }
});

export const { addTask, editTask, deleteTask, filterTasksByDate } = plannerSlice.actions;
export default plannerSlice.reducer;
