import Todo from '../../exercisexp/src/component/Todo'
import { useContext, useRef, useState } from 'react';
// import { todoContext } from '../src/App';


const Edit = () => {
    const editRef = useRef(null)
    const [editTask, setEditTask] = useState(false)

    
    const handleEditing = () => {
        setEditTask(true)
    }
    // console.log(todoContext);
    // const {list} = useContext(todoContext)
    const editList = () => {
        console.log('wokr');
        console.log();

    }

    
    return (
        <>
        {/* <input ref={editRef} onChange={(e) => e.target.value}/> */}
        <button onClick={editList}>edit</button>
        <div>{editRef.current}</div>
        
        </>
    )
}

export default Edit