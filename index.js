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

// the playRound function should probably use a switch statement instead of if/else to make it a bit more readable
function playRound(playerSelection, computerSelection) { // compares player vs computer (winner's score goes up by 1). For a tie, a boolean is set to true to redo the round
  if (playerSelection.toLowerCase() === 'rock') {  // used .toLowerCase() to prevent case sensitive user input (ie. 'Rock, 'ROCK', 'RoCk', etc)
    if (computerSelection === rock) {
      alert("(Rock vs Rock) = Tie\n'Two rocks don't make a right, but they do make a tie.'\n\nYour mud encrusted sedimentary rock looks mighty pauper next to their Great Star of Africa - a pendeloque-cut brilliant diamond weighing in at over 500 carats. Upon closer inspection of the diamond, you read the laser engraved words, 'TRY AND STOP ME!'");
      tie = true; // set tie to true to redo this round
      return "Rock vs Rock = Tie";
    } else if (computerSelection === paper) {
      alert("(Rock < Paper) = Loss\n'Your puny rock is no match to my paper [1]'\n\n[1] Letterpressed on this majestic piece of bone-colored luxury card stock (in the timeless Silian Rail typeface) are the words, 'YOU LOSE!' (You also notice a really nice watermark)");
      computerScore += 1;
      return "Rock vs Paper = Loss";
    } else if (computerSelection === scissors) {
      alert ("(Rock > Scissors) = Win\n'Your stupid dirty rock I guess somehow beats my Sasuke bonsai scissors - scissors handcrafted for over a month by the master blacksmith Yasuhiro Hirakawa.'\n\nLooking closer at these scissors you see an engraving on the handle that reads (in very little letters), 'I can tell you with no ego, that these are my finest scissors. Now go cut that stupid filthy human's cheap Dunder Mifflin paper!' (You win...)");
      playerScore += 1;
      return "Rock vs Scissors = Win";
    } else {
      alert("uh oh, something went wrong");
    }
  } else if (playerSelection.toLowerCase() === 'paper') { // if player chooses paper, compare it to the computers choice
    if (computerSelection === rock) {
      alert("(Paper > Rock) = Win\nPaper beats rock - you win!"); // got a bit lazier with the text, might adjust later
      playerScore += 1;
      return "Paper vs Rock = Loss"
    } else if (computerSelection === paper) {
      alert("(Paper vs Paper) = Tie\nPaper doesn't beat paper (but they do stack nicely). It's a tie!");
      tie = true; // redo round
      return "Paper vs Paper = Tie";
    } else if (computerSelection === scissors) {
      alert("(Paper < Scissors) = Loss\n'Your puny paper is no match for my name-brand scissors! You lose!'");
      computerScore += 1;
      return "Paper vs Scissors = Loss";
    } else {
      alert("uh oh, something went wrong");
    }
  } else if (playerSelection.toLowerCase() === 'scissors') { // if player chooses scissors, compare it to the computers choice
    if (computerSelection === rock) {
      alert("(Scissors < Rock) = Loss\n'HAHAHA, you think your flimsy dollar-store scissors are any match for The Cullinan Diamond?' (You lose)");
      computerScore += 1;
      return "Scissors vs Rock = Loss";
    } else if (computerSelection === paper) {
      alert("(Scissors > Paper) = Win\n'I suggest you and your Kmart Jaclyn Smith Collection Free Gift Scissors stay the hell away from my gold foil stamped 700gsm triplex paper stock business card.' You win (it just takes you several attempts to finally cut the card).");
      playerScore += 1;
      return "Scissors vs Paper = Win";
    } else if (computerSelection === scissors) {
      alert("(Scissors vs Scissors) = Tie\n'Scissors, scissors, scissors, can't you see? Sometimes you get lucky and tie with me'. (It's a tie)");
      tie = true;
      return "Scissors vs Scissors = Tie";
    } else {
      alert("uh oh, something went wrong");
    }
  }    
}

// declare some nice variables
let numberOfGames = 5;
let playerScore = 0;
let computerScore = 0;
let tie = false; // used to redo a round in case of a tie

function game(numberOfGames) { // function that runs the number of games 
  for (let i = 0; i < numberOfGames; i++) {
    let computerSelection = getComputerChoice(); // get computer's choice of rock (0), paper (1) or scissors (2)
    let playerSelection = prompt("Rock, paper, or scissors?"); // ask player's choice of rock, paper or scissors
    if (playerSelection === null || playerSelection === "") { // if player hits cancel or enters an empty string, exit the game (added this because the .toLowerCase method of the playRound function threw a null error if a player hit the 'cancel' button from the prompt)
      alert('Canceled');
      i = numberOfGames; // stops the loop
      return;
    }
    console.log(playRound(playerSelection, computerSelection)); // prints returned value from playRound() function
    console.log(`Score: ${playerScore}-${computerScore}`); // prints score
    if (tie === true) { // if tie is true, redo round, then set tie back to false
      --i; // decrease i to redo the round
      tie = false;
    }
  }
  if (playerScore > computerScore) { // determine winner
    console.log("You win! You've saved humanity!");
  } else if (computerScore > playerScore) {
    console.log("'I win, and you lose! You. Human. Scum.'\n(Game Over (for you (and also all the other humans)))");
  } else {
    console.log("A tie???"); // there should't be a tie (since tie's are replayed), but hey, just in case
  }
}

game(numberOfGames); // runs the number of games (currently set to 5 by default)