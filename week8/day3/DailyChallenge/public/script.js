let name = document.getElementById("name");
let lastName = document.getElementById("lastName");
let email = document.getElementById("email");
let userName = document.getElementById("userName");
let password = document.getElementById("password");
let registered = document.getElementById("registered")
let allInfo = [];
let allInfoLog = []

const userFunc = () => {
    fetch('http://127.0.0.1:1000/users')
    .then((res) => res.json())
    .then((data) => {
        allInfo = data.map((item) => ({
            name: item.name,
            lastName: item.lastName,
            userName: item.userName,
            email: item.email,
            password: item.password
        }));
    })
    .catch((e) => console.log(e));
}

const register = () => {
    let userInfo = {
        name: name.value,
        lastName: lastName.value,
        email: email.value,
        userName: userName.value,
        password: password.value
    };
    
    fetch('http://127.0.0.1:1000/register', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo)
    })
    .then((res) => res.json())
    .then((data) => {
        let existingUser = allInfo.find(user => user.email === userInfo.email);
        if (existingUser) {
            console.log('not good');
        } else {
            console.log('good');
            registered.innerHTML = `you're registered`
            registered.textContent = `you're registered`
        }

    })
    .catch((e) => console.log(e));
}

const checkName = (information, information2) => {
    for (let key in information2) {
        let y = `${key}: ${information2[key]}`;
        if (y == information) {
            console.log('not good');
        } else {
            console.log('good');
        }
    }
}

let log = document.getElementById("log")


let password2
let userName2

const login = () => {
    let userLog = {
        userName1 : userName.value,
        password: password.value
    }
    fetch('http://127.0.0.1:1000/login', {
        method: "GET",
      
    })
    .then((res) => res.json())
    .then((data) => {
        allInfoLog = data.map((item) => {
            userName2 = item.user_name
            password2 = item.password
           
        })
        if (userName2 === userLog.userName1 && password2 === userLog.password) {
            log.innerHTML = `you're logged in`;
            log.textContent = `you're logged in`;
        }
        else {
            log.innerHTML = `wrong username of password`;
            log.textContent = `wrong username of password`;
        }


    })
 
   
    .catch((e) => console.log(e));


}
    




