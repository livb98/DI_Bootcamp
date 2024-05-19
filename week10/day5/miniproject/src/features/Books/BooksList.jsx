import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from 'react-redux'
import { useBooksSelector } from "./bookHooks";
import { addbooks, filterbooks } from "./bookSlice";
import { current } from "@reduxjs/toolkit";
import Genre from "./Genre";


const BooksList = ({title, author, genreBook}) => {
    const bookslist = useBooksSelector()
    const selectedGenre = useSelector(state => state.bookReducer.genre)
    console.log(bookslist);
    const titleRef = useRef()
    const authorRef = useRef()
    const genreRef = useRef()
    const [genre, setGenre] = useState()
    const dispatch = useDispatch()

    const handleAddBooks = () => {
        // console.log(genreRef.current.elements);
        const checked = Array.from(genreRef.current.elements).filter(item=>{
            return item.checked
        })
        .map(item=> item.value)
        console.log('=> ',checked[0]);
        dispatch(addbooks({title: titleRef.current.value,author: authorRef.current.value, genre: checked[0] }))
        titleRef.current.value = ''
        authorRef.current.value = ''
        setGenre(checked[0])
    }
    const handleChange = (e) => {
        setGenre(e.target.value)
    }
    const filter = bookslist.filter(item => item.genre === selectedGenre) 
    return (
        <>
        <h2>books: </h2>
        <div>
        <input ref={titleRef} placeholder="title"/><br/>
        <input ref={authorRef} placeholder="author"/><br/>
        <fieldset ref={genreRef} onChange={handleChange} >
        <input  type="radio" value="horror" name="genre"/>
        <label htmlFor='horror'>horror</label>
        <input  type="radio" value="fantasy" name="genre"/>
        <label htmlFor='fantasy'>fantasy</label>
        <input  type="radio" value="fiction" name="genre"/>
        <label htmlFor='fiction'>fiction</label>
        </fieldset>
        <button onClick={handleAddBooks}>add book</button>
        <div>
        <Genre genre={genre} />
            {
                filter.map(book => {return (
                    <>
                    <ul>
                    <li key={book.id}>{book.title}</li>
                    </ul>
                    </>
                )})
            }
        </div>
        </div>

        </>
    )
}

export default BooksList