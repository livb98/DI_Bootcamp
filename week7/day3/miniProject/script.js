const main = document.getElementById("main")
const find = document.getElementById("find")
const info = document.getElementById("info")

let arrChar 

async function findChar() {
  
    const x = Math.floor(Math.random() * 83) + 1; 
    const url = new URL(`https://www.swapi.tech/api/people/${x}`)
    const options = {
        method: 'get'
    }
    try {
    
    const res = await fetch(url, options);
    const data = await res.json();
    const infoData = data.result.properties
    const nameData = infoData.name
    const heightData = infoData.height
    const genderData = infoData.gender
    const birthData = infoData.birth_year
    const worldUrl = infoData.homeworld
    const resP = await fetch(worldUrl)
    const dataP = await resP.json()
    const worlData = dataP.result.properties.name
    arrChar = []
    arrChar.push(nameData,heightData,genderData,birthData,worlData)
    let name = document.getElementById("name")
    let height = document.getElementById("height")
    let gender = document.getElementById("gender")
    let birth = document.getElementById("birth")
    let world = document.getElementById("world")
    name.textContent = arrChar[0]
    height.textContent = `height: ${arrChar[1]}`
    gender.textContent = `gender: ${arrChar[2]}`
    birth.textContent = `birthyear: ${arrChar[3]}`
    world.textContent = `world: ${arrChar[4]}`
    
    }
    
    catch (err) {
        let error = document.createElement("div")
        info.remove()
        main.appendChild(error)
        error.id = 'error'
        error.textContent = `this person isn't available`
        console.log(`error => ${err}`);
    }    

}
// $(window).load(function() {
//     $('#loading').hide();
//   });
