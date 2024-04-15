let randomEmoji = {}
const result = document.getElementById("result")
let playerScore 




function getRandom(){
    fetch('http://127.0.0.1:3001/emojis')
    .then(res => res.json())
    .then(data => {
        randomEmoji = data.ramdomEmoji
        let option = data.shuffleEmojis
        let score = data.score
        render(randomEmoji,option,score)
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
    root.innerHTML = " hint:" + emoji.emoji
    result.innerHTML = `your score is ${score}`
    return result
}



function guessAnEmoji(){
    const guess = document.getElementById("guess").value
    const name = randomEmoji.name

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
        console.log(data.message, data.boardScore); 
        bestScore(data.boardScore)
        getRandom(); 
    })
    .catch((err) => {
        console.log(err);
    })
});

function bestScore(score){
    try {
    let board = document.createElement('div')
    result.appendChild(board)
    board.id = 'board'
    board.innerHTML = `previous players score: ${score}`
    console.log('working');
    } catch (err) {
        console.log(err);
    }
}