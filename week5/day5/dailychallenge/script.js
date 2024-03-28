const tasks = [];
const formSubmit = document.getElementById("myForm")
function addTask(e){
    e.preventDefault()
    const formTask = document.getElementById("inputTask")
    const taskValue = formTask.value.trim() 
    if (taskValue === ''){
        console.log("empty");
    }
    if (taskValue !== ""){
        tasks.push(formTask.value)
        console.log(tasks)
        formTask.value = ''; 
    }

}

formSubmit.addEventListener("submit",addTask)