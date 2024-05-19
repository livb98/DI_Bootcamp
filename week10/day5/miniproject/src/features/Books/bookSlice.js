import {createSlice, nanoid} from '@reduxjs/toolkit'

const initialState = {
    books: [],
    genre: ''

}

const bookSlice = createSlice({
    name: 'post',
    initialState: initialState,
    reducers: {
        addbooks: (state, action) => {
            state.books.push({id:nanoid(), title: action.payload.title, author: action.payload.author, genre: action.payload.genre})
        },
        filterbooks: (state,action) => {
            state.genre = action.payload
        }
        
    },

})

export const state = (state) => state.bookReducer
export const { addbooks, filterbooks } = bookSlice.actions
export default bookSlice.reducer