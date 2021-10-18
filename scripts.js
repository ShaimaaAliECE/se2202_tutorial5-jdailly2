let nextPlayer = 'X'; // takes a value of either 'X' or 'O' according to the game turns



//const table = document.querySelectorAll('tr');
const table = document.getElementsByTagName('td')
const button = document.createElement("button");
//table[1].remove();

//initialize the game

// use the value stored in the nextPlayer variable to indicate who the next player is


//This call will create the buttons needed for the gameboard.
createGameBoard()

function createGameBoard()
{
    for(let i =0; i!=9;i++){
        table[i].innerHTML = "<button>[  ]</button>"
    }
    // Programatically add a button with square brackets enclosing an empty space to each cell in the gameboard
}

// Programatically add 'takeCell' as an event listener to all the buttons on the board
let btns = document.querySelectorAll('button');
for (let i=0; i<btns.length; i++)
{
    btns[i].addEventListener('click', (event) => { takeCell(event)});
}

// This function will be used to respond to a click event on any of the board buttons.
function takeCell(event)
{


   const x = event.target;
   if(x.innerText=='[ ]'){
   x.innerHTML = nextPlayer;
  let title = document.getElementById('next-lbl')
  title.innerText = nextPlayer;
   if(nextPlayer == "X"){
    nextPlayer = 'O';
    
}
else{
    nextPlayer ='X';
}

}
 
 

    /*
        When the button is clicked, the space inside its square brackets is replaced by the value in the nextPlayer before switching it
    */

    // Make sure the button is clickable only once (I didn't mention how to do that, look it up :) )

    // Check if the game is over
    
    if (isGameOver())
    {
        let game = document.getElementById('game-over-lbl');
        game.innerHTML = "<h1>Game Over </h1>";
        // let the lable with the id 'game-over-lbl' display the words 'Game Over' inside <h1> element
    }

    // I'll leave declaring the winner for your intrinsic motivation, it's not required for this assignment 
   

}

function isGameOver()
{
    
    for(let i = 0;i!=9;i++){
if(btns[i].innerText=='[ ]'){
    return false
}

    }
    return true
}



  

  

  
   


           
           // return true;
    // This function returns true if all the buttons are disabled and false otherwise 
   

