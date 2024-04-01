const gameInfo = [
    {
      username: "john",
      team: "red",
      score: 5,
      items: ["ball", "book", "pen"]
    },
    {
      username: "becky",
      team: "blue",
      score: 10,
      items: ["tape", "backpack", "pen"]
    },
    {
      username: "susy",
      team: "red",
      score: 55,
      items: ["ball", "eraser", "pen"]
    },
    {
      username: "tyson",
      team: "green",
      score: 1,
      items: ["book", "pen"]
    },
   ];

const usernames = []
gameInfo.forEach((item,index) =>{
    usernames[index] = `${item.username}!`
})
console.log(usernames);

const winner = []
gameInfo.forEach((item,index) => {
    if (item.score > 5){
        winner[index] = `${item.username}`
    }
})
console.log(winner);
