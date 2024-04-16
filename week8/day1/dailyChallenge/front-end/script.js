let question = {};


function getRandom() {
  fetch("http://127.0.0.1:3001/question")
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      
    })
    .catch((err) => {
      console.log(err);
    });
}

getRandom();

// function getRandom() {
//     fetch("http://127.0.0.1:3002/emojis")
//       .then((res) => res.json())
//       .then((data) => {
//         console.log(data);
//         randomEmoji = data.randomEmoji;
//         console.log(randomEmoji);
//         // let options = data.shuffleEmojis;
//         // render(randomEmoji, options);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   }