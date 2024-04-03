let name  = document.getElementById("name")
let lastname  = document.getElementById("lastname")
let form = document.getElementById("form")
// console.log(name,lastname);

function handleSubmit(event) {
    event.preventDefault();
  
    const data = new FormData(event.target);
    const value = Object.fromEntries(data.entries());
    let newVal = JSON.stringify(value)
  
    console.log(newVal);
  }

  
  form.addEventListener('submit', handleSubmit);

