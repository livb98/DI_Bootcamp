column_num = 40
row_num = 50
total_grid = column_num * row_num

let savedColor

const colors = [
    "red",
    "blue",
    "green",
    "yellow",
    "orange",
    "purple",
    "pink",
    "brown",
    "black",
    "white",
    "gray",
    "cyan",
    "magenta",
    "lime",
    "olive",
    "maroon",
    "navy",
    "teal",
    "silver",
    "gold",
    "indigo"
  ];
  

// console.log(randomColors())
function createColors(){
    const colorsDiv = document.querySelector('.colors')

      // creating the divs 
    for (let i = 0; i < 20; i++){
    let colorDivs = document.createElement('div')
    colorDivs.style.backgroundColor = colors[i]
    colorsDiv.appendChild(colorDivs)

      //add event listener
      colorDivs.addEventListener('click', function(){
          savedColor = colorDivs.style.backgroundColor   
          console.log(savedColor)
        })

    }

    let colorDivs = document.createElement('div')
    colorDivs.style.backgroundColor = 'white'
    colorsDiv.appendChild(colorDivs)

}

function createClearButton(){
  const colorsDiv = document.querySelector('.colors')

    // creating the clear button
    button = document.createElement('button')    
    let text = document.createTextNode('CLEAR')
    button.appendChild(text)
    colorsDiv.appendChild(button)
    button.addEventListener('click', function(){

    let allBoardDivs = document.getElementsByClassName('boardDivs')
    for (let div of allBoardDivs){
      div.style.backgroundColor = 'white'
    }

    })
}

let isDrawing = false; 
function createBoard(){
  const board = document.querySelector('.board');
  
  for (let i = 0; i < total_grid; i++){
    let boardDivs = document.createElement('div');
    boardDivs.className = 'boardDivs';
    board.appendChild(boardDivs);

    boardDivs.addEventListener("click", function() {
      if(savedColor) {
        boardDivs.style.backgroundColor = savedColor;
      }
    });

    boardDivs.addEventListener('mousedown', function () {
      isDrawing = true;
      if(savedColor) {
        boardDivs.style.backgroundColor = savedColor;
      }
    });

    boardDivs.addEventListener('mousemove', function () {
      if (isDrawing && savedColor) {
        boardDivs.style.backgroundColor = savedColor;
      }
    });


    boardDivs.addEventListener('mouseup', function () {
      isDrawing = false;
    });

   
  }
}

function draw(boardDiv) {
  if (isDrawing && savedColor) {
    boardDiv.style.backgroundColor = savedColor;
  }
}

createClearButton()
createColors()
createBoard()
draw()

 