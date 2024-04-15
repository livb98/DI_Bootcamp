let randomEmoji = {}
const result = document.getElementById("result")
let playerScore 
let bestScore = []



function getRandom(){
    fetch('http://127.0.0.1:3001/emojis')
    .then(res => res.json())
    .then(data => {
        randomEmoji = data.ramdomEmoji
        let option = data.shuffleEmojis
        let score = data.score
        render(randomEmoji,option,score)
        console.log(score);
    })
    .catch((err) => {
        console.log(err);
    })
}

getRandom()

function render(emoji, options,score){
    const html = options.map(item => {
        return ` ${item.name}`
    })
    const root = document.getElementById("root")
    root.innerHTML = 'options: ' + html.join("") + " hint:" + emoji.emoji
    result.innerHTML = `your score is ${score}`
    return result
}



function guessAnEmoji(){
    const guess = document.getElementById("guess").value
    console.log(guess);
    const name = randomEmoji.name
    console.log(name);

    fetch("http://127.0.0.1:3001/emojis", {
        method: 'POST',
        headers:{
            'Content-Type':'application/json'
        },
        body: JSON.stringify({name,guess})
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        getRandom() 
    
    })
    .catch((err) => {
        console.log(err);
    })


   }
let newGame = document.getElementById("newGame")

newGame.addEventListener('click', function(){
    fetch("http://127.0.0.1:3001/reset-score", {
        method: 'GET'
    })
    .then((res) => res.json())
    .then((data) => {
        console.log(data.message); 
        getRandom(); 
    })
    .catch((err) => {
        console.log(err);
    })
});
