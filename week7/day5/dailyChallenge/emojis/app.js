const express = require('express')
const cors = require('cors')
const {emojis} = require("./emojis/emojis.js")

let score = 0
const app = express()

app.use(cors())
app.use(express.static(__dirname + "/public"))

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.listen(3001, () => {
  console.log('run on 3001');

})


app.get('/emojis', (req,res) => {
  const randomIndex = Math.floor(Math.random() * emojis.length);
  let ramdomEmoji = emojis[randomIndex]
  const shuffleEmojis = shuffleArray(emojis)
  res.json({shuffleEmojis,ramdomEmoji,score});
  return score

})
app.get('/reset-score', (req, res) => {
  score = 0; // Reset the score
  res.json({ message: 'Score reset successfully.' });
});


const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i-- ) {
    const j = Math.floor(Math.random() * (i+1));
    [array[i],array[j]] = [array[j],array[i]];
  }
  return array
}

app.post('/emojis', (req,res) =>{
  const {name, guess} = req.body
  if (name.toLowerCase() === guess.toLowerCase())  
  {score +=1
  return res.json({message: `congrat, score is ${score}`})}
  else
  {res.json({message: `try again,score is ${score}`})}
})



