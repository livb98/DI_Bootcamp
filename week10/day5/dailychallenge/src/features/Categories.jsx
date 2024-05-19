import { useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addCategory, removeCategory,filterCategory } from "./taskSlice";

const CategoriesList = () => {
    const dispatch = useDispatch();
    const categories = useSelector(state => state.TasksReducer.categories); // Adjusted selector
    const categoriesRef = useRef();

    const handleAddCategory = () => {
        const category = categoriesRef.current.value.trim();
        if (category) {
            dispatch(addCategory(category));
            categoriesRef.current.value = '';
        }
    };

    const handleRemoveCategory = (item) => {
        dispatch(removeCategory(item))
    }

    const filter = (category) => {
        dispatch(filterCategory(category))
        console.log(category);
    }

    return (
        <>
            <h2>Categories:</h2>
            <input ref={categoriesRef} placeholder="New category" />
            <button onClick={handleAddCategory}>Add Category</button>
            <div>
                {categories.map((category, index) => (
                    <div key={index}>
                        {category}
                        <button onClick={()=>handleRemoveCategory(category)}>remove</button>
                        <button onClick={()=>filter(category)}>filter by categories</button>
                        </div>
                ))}
            </div>

 
        </>
    );

};

export default CategoriesList;
