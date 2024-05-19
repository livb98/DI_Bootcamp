import { createSelector } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { state } from "./bookSlice";

export const useBooksSelector = () => {
    const bookSelector = createSelector(state, (state) => state.books)
    return useSelector(bookSelector)
}

export const useHorrorSelector = () => {
    const horrorSelector = createSelector(state, (state) => state.books.horror)
    return useSelector(horrorSelector)
}
export const useFantasySelector = () => {
    const fantasySelector = createSelector(state, (state) => state.books.fantasy)
    return useSelector(fantasySelector)
}
export const useFictionSelector = () => {
    const fictionSelector = createSelector(state, (state) => state.books.fiction)
    return fictionSelector
}
