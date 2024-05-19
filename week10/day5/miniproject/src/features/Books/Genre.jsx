import { useRef } from 'react'
import { useFantasySelector,useHorrorSelector,useFictionSelector, useBooksSelector } from './bookHooks'
import { filterbooks } from './bookSlice'
import { useDispatch } from 'react-redux'

const Genre = (props) => {
    const horror = useHorrorSelector()
    const fiction = useFictionSelector()
    const fantasy = useFantasySelector()
    const bookslist = useBooksSelector()
    const genreRef = useRef()
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
        {/* <fieldset> */}
            {/* <select name='genre' >
                <option value={horror}>horror</option>
                <option value='fantasy'>fantasy</option>
                <option value='fiction'>fiction</option>
            </select> */}
            <button onClick={filteredBooks}>genre</button>
        {/* </fieldset> */}
        </div>
        </>
    )
}

export default Genre