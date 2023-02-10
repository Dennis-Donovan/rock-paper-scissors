const rock = 0;
const paper = 1;
const scissors = 2;

function getComputerChoice() {
  choice = Math.floor(Math.random() * 3) // for the computer player, randomly generate 0 (rock), 1 (paper), or 2 (scissors)
  if (choice === 0) {
    return rock; 
  } else if (choice === 1) {
    return paper;
  } else if (choice === 2) {
    return scissors;
  } else {
    alert('uh oh'); // throw an alert if this function results in something other than 0, 1, or 2
    return;
  }
}

const para = document.querySelector('p');
const scoreBoard = document.querySelector('h2');

para.setAttribute('style', 'white-space: pre-line;'); // in order to use /r/n to space out text between paragraphs
scoreBoard.setAttribute('style', 'white-space: pre-line;');

// the playRound function could use a switch statement instead of if/else to make it a bit more readable
function playRound(playerSelection, computerSelection) { // compares player vs computer (winner's score goes up by 1)
  
  if (playerSelection === 'rock') {  // if player chooses paper, compare it to the computers choice
    if (computerSelection === rock) {
      para.textContent = "(Rock vs Rock) = Tie\r\n\n'Two rocks don't make a right, but they do make a tie.'\n\nYour mud encrusted sedimentary rock looks mighty pauper next to their Great Star of Africa - a pendeloque-cut brilliant diamond weighing in at over 500 carats. Upon closer inspection of the diamond, you read the laser engraved words, 'TRY AND STOP ME!'";
      return "Rock vs Rock = Tie";
    } else if (computerSelection === paper) {
      para.textContent = "(Rock < Paper) = Loss\r\n\n'Your puny rock is no match to my paper [1]'\n\n[1] Letterpressed on this majestic piece of bone-colored luxury card stock (in the timeless Silian Rail typeface) are the words, 'YOU LOSE!' (You also notice a really nice watermark)";
      computerScore += 1;
      return "Rock vs Paper = Loss";
    } else if (computerSelection === scissors) {
      para.textContent = "(Rock > Scissors) = Win\r\n\n'Your stupid dirty rock I guess somehow beats my Sasuke bonsai scissors - scissors handcrafted for over a month by the master blacksmith Yasuhiro Hirakawa.'\n\nLooking closer at these scissors you see an engraving on the handle that reads (in very little letters), 'I can tell you with no ego, that these are my finest scissors. Now go cut that stupid filthy human's cheap Dunder Mifflin paper!' (You win...)";
      playerScore += 1;
      return "Rock vs Scissors = Win";
    } else {
      alert("uh oh, something went wrong");
    }
  } else if (playerSelection === 'paper') { // if player chooses paper, compare it to the computers choice
    if (computerSelection === rock) {
      para.textContent = "(Paper > Rock) = Win\r\n\nPaper beats rock - you win!"; // got a bit lazier with the text, might adjust later
      playerScore += 1;
      return "Paper vs Rock = Win"
    } else if (computerSelection === paper) {
      para.textContent = "(Paper vs Paper) = Tie\r\n\nPaper doesn't beat paper (but they do stack nicely). It's a tie!";
      return "Paper vs Paper = Tie";
    } else if (computerSelection === scissors) {
      para.textContent = "(Paper < Scissors) = Loss\r\n\n'Your puny paper is no match for my name-brand scissors! You lose!'";
      computerScore += 1;
      return "Paper vs Scissors = Loss";
    } else {
      alert("uh oh, something went wrong");
    }
  } else if (playerSelection === 'scissors') { // if player chooses scissors, compare it to the computers choice
    if (computerSelection === rock) {
      para.textContent = "(Scissors < Rock) = Loss\r\n\n'HAHAHA, you think your flimsy dollar-store scissors are any match for The Cullinan Diamond?' (You lose)";
      computerScore += 1;
      return "Scissors vs Rock = Loss";
    } else if (computerSelection === paper) {
      para.textContent = "(Scissors > Paper) = Win\r\n\n'I suggest you and your Kmart Jaclyn Smith Collection Free Gift Scissors stay the hell away from my gold foil stamped 700gsm triplex paper stock business card.' You win (it just takes you several attempts to finally cut the card).";
      playerScore += 1;
      return "Scissors vs Paper = Win";
    } else if (computerSelection === scissors) {
      para.textContent = "(Scissors vs Scissors) = Tie\r\n\n'Scissors, scissors, scissors, can't you see? Sometimes you get lucky and tie with me'. (It's a tie)";
      tie = true;
      return "Scissors vs Scissors = Tie";
    } else {
      alert("uh oh, something went wrong");
    }
  }  
}

// declare some nice variables
let playerScore = 0;
let computerScore = 0;

function game(choice) { // function that runs game based on player's choice
  let computerSelection = getComputerChoice(); // get computer's choice of rock (0), paper (1) or scissors (2)
  let playerSelection = choice;
  
  playRound(playerSelection, computerSelection); // plays out round based on player's and computer's selection
  scoreBoard.textContent = `Score: ${playerScore}-${computerScore}`; // prints score
  
  if (playerScore === 5) { // announce winner at 5 wins, then reset score
    scoreBoard.textContent = `You win! You've saved humanity!\r\n\nFinal Score: ${playerScore}-${computerScore}`;
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    scoreBoard.textContent = `'I win, and you lose! You. Human. Scum.'\nGame Over (for you, and the rest of humanity)\r\n\nFinal Score: ${playerScore}-${computerScore}`;
    playerScore = 0;
    computerScore = 0;
  }
}

// node list to communicate with html buttons
const buttons = document.querySelectorAll('button');

// .forEach DOM method to iterate through each button, get player's choice based on button pressed, and run game() function with that choice
buttons.forEach((button) => {
  button.addEventListener('click', () => {
    if (button.id === "0") {
      let choice = "rock";
      game(choice);
    }
    if (button.id === "1") {
      let choice = "paper";
      game(choice);
    }  
    if (button.id === "2") {
      let choice = "scissors";
      game(choice);
    }
  });
});