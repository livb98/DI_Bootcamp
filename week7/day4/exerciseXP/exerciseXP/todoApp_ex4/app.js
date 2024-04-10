import { TodoList } from "./todo.js";



let a = new TodoList('a', true);
let b = new TodoList('b');

a.addTask();
a.markTask();
b.addTask();
b.markTask();

console.log(TodoList.getAllTasks());