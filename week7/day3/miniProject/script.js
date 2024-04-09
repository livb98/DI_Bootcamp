const main = document.getElementById("main");
const find = document.getElementById("find");
const info = document.getElementById("info");
const load = document.getElementById("load");


let arrChar;

async function findChar(err) {
    err.preventDefault()
    try {
        
        document.getElementById("name").textContent = "";
        document.getElementById("height").textContent = "";
        document.getElementById("gender").textContent = "";
        document.getElementById("world").textContent = "";
        document.getElementById("birth").textContent = "";
        load.style.display = "block";

        const x = Math.floor(Math.random() * 83) + 1; 
        const url = new URL(`https://www.swapi.tech/api/people/${x}`);
        const options = {
            method: 'get'
        };
        
        const res = await fetch(url, options);
        const data = await res.json();
        const infoData = data.result.properties;
        const nameData = infoData.name;
        const heightData = infoData.height;
        const genderData = infoData.gender;
        const birthData = infoData.birth_year;
        const worldUrl = infoData.homeworld;
        const resP = await fetch(worldUrl);
        const dataP = await resP.json();
        const worldData = dataP.result.properties.name;

        arrChar = [nameData, heightData, genderData, birthData, worldData];

        let name = document.getElementById("name");
        let height = document.getElementById("height");
        let gender = document.getElementById("gender");
        let birth = document.getElementById("birth");
        let world = document.getElementById("world");

        name.textContent = arrChar[0];
        height.textContent = `Height: ${arrChar[1]}`;
        gender.textContent = `Gender: ${arrChar[2]}`;
        birth.textContent = `Birth Year: ${arrChar[3]}`;
        world.textContent = `World: ${arrChar[4]}`;
    } catch (err) {
        let error = document.createElement("div");
        info.remove();
        main.appendChild(error);
        error.id = 'error';
        error.textContent = `This person isn't available`;
        console.log(`Error: ${err}`);
    } finally {

        load.style.display = "none";
    }
}

find.addEventListener('click',findChar)
