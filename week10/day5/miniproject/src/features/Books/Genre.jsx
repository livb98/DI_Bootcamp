import { useRef } from 'react'
import { useFantasySelector,useHorrorSelector,useFictionSelector, useBooksSelector } from './bookHooks'
import { filterbooks } from './bookSlice'
import { useDispatch } from 'react-redux'

const Genre = (props) => {
    const horror = useHorrorSelector()
    const fiction = useFictionSelector()
    const fantasy = useFantasySelector()
    const bookslist = useBooksSelector()
    console.log(bookslist);
    const dispatch = useDispatch()

    const filteredBooks = () => {
        console.log(props.genre)
        dispatch(filterbooks(props.genre))
        ;

    }
    return (
        <>
        <div>
            <button onClick={filteredBooks}>genre</button>
        </div>
        </>
    )
}

export default Genre