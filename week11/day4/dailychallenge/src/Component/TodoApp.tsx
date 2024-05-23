import { useState, useEffect } from "react"
import { v4 as uuidv4 } from 'uuid';



type ListProps = {
    id: string;
    text: string;
  }

  interface ListComponentProps {
    arrItem: ListProps[] 
  }


const Todo = ({arrItem}: ListComponentProps) => {
    const [todos, setTodo] = useState<ListProps[]>([])
    const [newTodo, setNewTodo] = useState('');

    useEffect(() => {
        setTodo(todos)
    },[])


    const addTodo = () => {
        if (newTodo !== '') {
            const newTodoItem: ListProps = {
                id: uuidv4(),
                text: newTodo,
            };
            setTodo([...todos, newTodoItem]);
            setNewTodo('');
        }
    };

    return (
        <div>
            <input
                type="text"
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
            />
            <button onClick={addTodo}>Add Todo</button>
            <ul>
                {todos.map((todo) => (
                    <li key={todo.id}>{todo.text}</li>
                ))}
            </ul>
        </div>
    );

}
export default Todo