// exercise1
function compareToTen(num){
    return new Promise((res,rej) => {
        if (num <= 10){
        res ("resolved")
        } else {
            rej ("rejected")
        }
    
    })

}

compareToTen(15)
  .then(result => console.log(result))
  .catch(error => console.log(error))

// exercise2
let success = new Promise((res,rej) => {
    setTimeout(() =>{
        res('sucess')
    }, 4000)
})
console.log(success);

// exercise3
const p = Promise.resolve(3)
const p2 = Promise.reject('Booo!')

p.then(res => console.log(res)).catch(err => console.log(err))
p2.then(res => console.log(res)).catch(err => console.log(err))

