import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    tasks: [],
    categories: []
};

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState: initialState,
    reducers: {
        addTask: (state, action) => {
            state.tasks.push({ 
                id: nanoid(), 
                name: action.payload.name, 
                completed: false, 
                category: action.payload.category 
            });
        },
        completeTask: (state, action) => {
            const task = state.tasks.find(task => task.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
        removeTask: (state, action) => {
            state.tasks = state.tasks.filter(task => task.id !== action.payload);
        },
        addCategory: (state, action) => {
            state.categories.push(action.payload);
        },
        removeCategory: (state, action) => {
            state.categories = state.categories.filter(category => category !== action.payload)
        },
        filterCategory: (state, action) => {
            state.filter = action.payload
        }
    }
});

export const { addTask, completeTask, removeTask, addCategory, removeCategory, filterCategory } = tasksSlice.actions;
export default tasksSlice.reducer;
