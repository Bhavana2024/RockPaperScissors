
let score = JSON.parse(localStorage.getItem('score')) ||  {
        wins: 0,
        losses: 0,
        ties: 0
    };


updateScoreElement();

/* if (!score) //score === null -> !null //
{       
    score = {
        wins: 0,
        losses: 0,
        ties: 0
    };
}
*/
function playGame(playerMove) 
{
const computerMove = pickComputerMove();
let res = '';

if (playerMove ==='Scissors') 
{ // here placed the all code in if statment to work if only playerMove(you) equals to Scissors.  //
    
     if (computerMove === 'rock') 
     { 
         res = 'you lose.';

     } 
     else if (computerMove === 'paper') 
     { 
       res = 'you win.';
   
    } 
    else if (computerMove === 'scissors')
     {
        res = 'Tie.';
    
     } 


}
else if (playerMove === 'paper') 
{
    if (computerMove === 'rock') 
    { 
      res = 'you win.';
    }
    else if (computerMove === 'paper')
     { 
     res = 'Tie.';
    } 
    else if (computerMove === 'scissors')
     {
       res = 'you lose.';
    }


}
else if(playerMove === 'rock')
 {
    if (computerMove === 'rock')
     { 
       res = 'Tie.';
     }
    else if (computerMove === 'paper')
     { 
   res = 'you lose.';
    }
    else if (computerMove === 'scissors') 
    {
      res = 'you win.';
    }
}

if (res === 'you win.') 
{
    score.wins +=  1;
}
else if (res ==='you lose.')
{
    score.losses += 1;
}
else if (res ==='Tie.')
{
    score.ties +=  1;
}

//  To store(get) the values even after the refresh  //

localStorage.setItem('score',JSON.stringify(score));

updateScoreElement();

document.querySelector('.js-result').innerHTML = `Result: ${res} `;
document.querySelector('.js-moves').innerHTML = ` You
<img src="${playerMove}-emoji.png" class="move-icon">
<img src="${computerMove}-emoji.png" class="move-icon">
computer `;


/* alert(`you picked ${playerMove}. computer picked ${computerMove}. Result: ${res}
Wins: ${score.wins} ,Losess: ${score.losses} ,Ties: ${score.ties}`);    */
}

function updateScoreElement() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins} ,Losess: ${score.losses} ,Ties: ${score.ties}`;
}

 function pickComputerMove()
 {
    
    const randomNumber = Math.random();
    let computerMove = '';

  if (randomNumber >= 0 && randomNumber < 1/3) 
  {
     computerMove ='rock';

  } 
   else if(randomNumber >= 1/3 && randomNumber < 2/3) 
    {
     computerMove ='paper';
    }

     else if (randomNumber >= 2/3 && randomNumber < 1) 
      {
       computerMove ='scissors';
      }
       return computerMove; // give the value in console//

       console.log('wont show the code'); //it wont provide this code because it written after return//
 }

 
