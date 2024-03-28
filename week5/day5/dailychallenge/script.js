const tasks = [];

document.getElementById("myForm").addEventListener("submit", function(e) {
    e.preventDefault();

    const formTask = document.forms[0].inputTask;
    const taskValue = formTask.value.trim();

    if (taskValue !== "") {
        tasks.push(taskValue); 
        console.log("Task added:", taskValue);
        console.log("Updated tasks array:", tasks); 

        formTask.value = ""; 
    } else {
        console.log("Task input is empty. Please enter a task.");
    }
});
