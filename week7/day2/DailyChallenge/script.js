const form = document.getElementById("form");
const allGif = document.getElementById("gif")
const delAll = document.createElement('button')
delAll.type = 'button'
delAll.textContent = 'delete all'
allGif.appendChild(delAll)


async function fetchGif () {

    const newUrl = new URL (`https://api.giphy.com/v1/gifs/random?`);
    const apiKey = "hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My";
    let input = document.getElementById("input");
    let category = input.value;
    newUrl.searchParams.append('tag', category); 
    newUrl.searchParams.append('rating', 'g');
    newUrl.searchParams.append('api_key', apiKey);
    const url = newUrl.href;
    const options = {
        method: 'GET',
    };
    try {
        let res = await fetch(url, options);
        let obj = await res.json();
        const gif = document.createElement("img");
        const gifURL = obj.data.images.original.url;
        gif.src = gifURL;
        const del = document.createElement('button')
        del.type = 'button'
        del.textContent = 'delete'
        del.addEventListener('click', function (){
            gif.remove()
            del.remove()
        })
        delAll.addEventListener('click',function(){
            gif.remove()
            del.remove()
        })
        allGif.appendChild(gif)
        allGif.appendChild(del);
        console.log(allGif);

    } catch (e) {
        console.log(`error => ${e}`);
    }

}



fetchGif()

