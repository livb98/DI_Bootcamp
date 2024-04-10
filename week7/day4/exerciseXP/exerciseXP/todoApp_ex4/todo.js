
export class TodoList {
    static allTasks = [];

    constructor(task, complete = false) {
        this.task = task;
        this.complete = complete;
    }

    addTask() {
        TodoList.allTasks.push({ task: this.task, complete: this.complete });
    }

    markTask() {
        this.complete = !this.complete;
    }

    static getAllTasks() {
        return TodoList.allTasks;
    }
}

