import React, { createContext, useContext, useState, useRef} from "react";
import Edit from "../../../dailychallenge/component/Edit";


const Todo = () => {
    const [list, setList] = useState([])
    const [todoText, setTodoText] = useState("");

    const handleAddTodo = () => {
    list.push(todoText)
    setTodoText("");
    //   console.log(list);
    };
  
    const handleRemoveTodo = (i) => {
        list.splice(i,1)
        setList([...list])
    
    };
  
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          placeholder="Add a new todo"
          value={todoText}
          onChange={(e) => setTodoText(e.target.value)}
        />
        <button onClick={handleAddTodo}>Add Todo</button>
        <div>
            <ul>
                {list.map((item,i) => <li key={i}>{item}
                <button onClick={() => handleRemoveTodo(i)}>remove</button>
                <Edit/></li>)}
                
            </ul>

        </div>


      </div>
    );
  }



export default Todo