import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from 'axios'
import { useSelector } from 'react-redux'

const POST_URL = 'https://jsonplaceholder.typicode.com/posts'

export const fetchPosts = createAsyncThunk('posts/fetch', async()=>{
    const res = await axios.get(POST_URL)
    return res.data
})

const initialState = {
    posts: [],
    status: '', // loading, success, failed

}

const bookSlice = createSlice({
    name: 'post',
    initialState: initialState,
    reducers: {
        addreaction: (state,action) => {
            const {id, name} = action.payload
            const post = state.posts.find(post=> post.id === id)
            if (post) {
                post.reaction[name]++
            }
        }
    },
    extraReducers(builder) {
        builder
        .addCase(fetchPosts.fulfilled, (state,action) =>{
            state.status = 'success'
            const loadedPosts = action.payload.map(post => {
                post.reaction = {
                    thumbsUp: 0,
                    wow: 0,
                    heart: 0,
                    rocket: 0,
                    coffee: 0,
                }
                return post
            })
            state.posts = loadedPosts
        })
        .addCase(fetchPosts.pending, (state,action) => {
            state.status = 'loading'
        })
        .addCase(fetchPosts.rejected, (state,action) => {
            state.status = 'failed'
        })
    }

})

export const posts = (state) => state.bookReducer.posts
export const status = (state) => state.bookReducer.status
export const {addreaction} = bookSlice.actions
export default bookSlice.reducer