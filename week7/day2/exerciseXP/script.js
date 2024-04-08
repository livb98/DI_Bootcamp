// exercise1
function fetchGiphy(){
    const url ='https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
    const options = {
        method: 'GET',
    }

    fetch(url,options)
    .then((res) => {
        return res.json()
    })
    .then((res) =>{
        console.log(res.data);
    })
    .catch((err) => {
        console.log(err);
    })

}
// fetchGiphy()

// exercise2
async function GiphySun(value1,value2,value3){
    const url = `https://api.giphy.com/v1/gifs/search?q=${value1}&rating=${value2}&api_key=${value3}`
    const options = {
        method: 'GET'
    }
    try {
        const res = await fetch(url, options);
        const obj = await res.json();
        const data = await Object.values(obj)[0]
        console.log(Object.values(data).slice(1,11));  
    } catch (err) {
        console.log(err);
    }
}

GiphySun('sun','g','hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')

// exercise3
const fetchSwapi = async (url) => {

    try {
        const response = await fetch(url)
        let objectStarWars = await response.json();
        console.log(objectStarWars.result);
    } catch (e) {
        console.log(`error is ${e}`);
    }
}
// fetchSwapi("https://www.swapi.tech/api/starships/9/")

// exercise4
// calling
// resolved
