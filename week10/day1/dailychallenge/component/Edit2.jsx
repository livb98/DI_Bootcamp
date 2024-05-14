import React, { useReducer, useState } from "react";


function todoReducer(state, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...state, { id: Date.now(), text: action.text }];
    case "REMOVE_TODO":
      return state.filter((todo) => todo.id !== action.id);
      case "EDIT_TODO":
        return state.map((todo) =>
          todo.id === action.id ? { ...todo, text: action.text } : todo
        );
    default:
      return state;
  }
}

function TodoList() {
  const [todos, dispatch] = useReducer(todoReducer, []);
  const [todoText, setTodoText] = useState("");
  const [editId, setEditId] = useState(null); 
  const [editText, setEditText] = useState(""); 

  const handleAddTodo = () => {
    if (todoText.trim() === "") return;
    dispatch({ type: "ADD_TODO", text: todoText });
    setTodoText("");
  };

  const handleRemoveTodo = (id) => {
    dispatch({ type: "REMOVE_TODO", id });
  };

  const handleEditTodo = (id, text) => {
    setEditId(id);
    setEditText(text);
  };

  const handleSaveEdit = () => {
    dispatch({ type: "EDIT_TODO", id: editId, text: editText });
    setEditId(null);
    setEditText("");
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
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {editId === todo.id ? (
              <>
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                />
                <button onClick={handleSaveEdit}>Save</button>
              </>
            ) : (
              <>
                {todo.text}
                <button onClick={() => handleEditTodo(todo.id, todo.text)}>
                  Edit
                </button>
                <button onClick={() => handleRemoveTodo(todo.id)}>Remove</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList
