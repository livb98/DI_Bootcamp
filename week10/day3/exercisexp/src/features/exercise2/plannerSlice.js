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
