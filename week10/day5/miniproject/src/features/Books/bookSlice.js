import {createSlice, createAsyncThunk, nanoid} from '@reduxjs/toolkit'
import axios from 'axios'
import { useSelector } from 'react-redux'


const initialState = {
    books: [],

}

const bookSlice = createSlice({
    name: 'post',
    initialState: initialState,
    reducers: {
        addbooks: (state, action) => {
            state.books.push({id:nanoid(), title: action.payload.title, author: action.payload.author, genre: action.payload.genre})
        },
        filterbooks: (state,action) => {
            state.books = state.books.filter(item=>item.genre === action.payload.genre)
        }
        
    },

})

export const state = (state) => state.bookReducer
export const { addbooks, filterbooks } = bookSlice.actions
export default bookSlice.reducer