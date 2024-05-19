import { createSelector } from "@reduxjs/toolkit";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, posts, status } from "./bookSlice";
import { useCallback } from 'react'

export const useBookSelector = () => {
    const bookSelector = createSelector(posts, (posts) => posts)
    return useSelector(bookSelector)
}

export const useStatusSelector = () => {
    const selectorStatus = createSelector(status, (status) => status)
    return useSelector(selectorStatus)
}

export const useFetchPost = () => {
    const dispatch = useDispatch()
    return useCallback(() => {
        dispatch(fetchPosts())
    }, [dispatch])
}



