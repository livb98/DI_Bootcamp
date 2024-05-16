export const ADD_TASK = 'add_task'
export const SELECTED_DATE = 'selected_date' 

const initialState = {
    taskByDay: []
}

export const taskReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_TASK:
            const newTask = [...state.taskByDay]
            newTask.push({id: uuidv4(), task: action.payload, completed: false})
        return state

        default:
            return state
    }
}