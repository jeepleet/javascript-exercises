function getCmomputerChoice() {
      let str1 = Math.floor((Math.random() * 3));
   if (str1 === 0) {
    return "rock";
    } else if (str1 === 1) {
    return "paper";
     } else if (str1 === 2) {
    return "scissors";
     }
   } 


   function getHumanChoice() {
     let input = window.prompt("Type rock, paper or scissors");
      return input;
      
   }

  let computerscore = 0;
  let humanscore = 0;

   function playGame() {
   let count = 0;
   while (count < 5) {
   const humanSelection = getHumanChoice();
  const computerSelection = getCmomputerChoice();
playRound(humanSelection, computerSelection);
   console.log("Round", count+1);
   console.log("Current score:", "Human =", humanscore, "Computer= ", computerscore)
   count++;
   }
   console.log("final scrore:", "Human =", humanscore, "Computer =", computerscore);
   if (humanscore === computerscore) {
    console.log("Entire Game is a tie");
  } else if (humanscore > computerscore) {
    console.log("YOU WIN ENTIRE GAME");
   } else {
    console.log("Sorry, but computer wins all");
   }
  }

    function playRound(humanChoice, computerChoice) {

     humanChoice = humanChoice.toLowerCase()
    console.log("human chose:", humanChoice);
    console.log("computer chose:", computerChoice);
    
    if (humanChoice === computerChoice) {
      console.log("Its a tie!");
    
     } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanscore++;
    console.log(humanscore, "You win The Round!");


     } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanscore++;
    console.log(humanscore, "You win The Round!");


     } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanscore++;
    console.log(humanscore, "You win The Round!");

 
     } else {
    computerscore++;
    console.log(computerscore, "You loose the Round!"); 
    }
    }
    playGame()



     



    

    





   


