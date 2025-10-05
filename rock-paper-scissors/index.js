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



  let computerscore = 0; // variabler i global scope 
  let humanscore = 0; // variabler i global scope 



    function playRound(humanChoice, computerChoice) {
      let outcome = "";

     humanChoice = humanChoice.toLowerCase()
    
    
    
    if (humanChoice === computerChoice) {
      outcome = "Its a tie!";
      return outcome;
    
     } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanscore++;
    outcome = "You Win!";
    return outcome;



     } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanscore++;
    outcome = "You Win!";
    return outcome;


     } else if (humanChoice === "paper" && computerChoice === "rock") {
    humanscore++;
    outcome = "You Win!";
    return outcome;

 
     } else {
    computerscore++;
    outcome = "You loose";
    return outcome;
  
    }
    }
  

    const button = document.createElement("button");
    const button1 = document.createElement("button");
    const button2 = document.createElement("button");
    let results = document.createElement("div");
    let linechoices = document.createElement("p");
    let lineoutcome = document.createElement("p");
    let linescore = document.createElement("p");
    let finalwinner = document.createElement("p");

    
    
    

    

    button.textContent = "rock";
    button1.textContent = "scissors";
    button2.textContent = "paper";
   document.body.append(button, button1, button2, results);
   results.appendChild(linechoices);
   results.appendChild(lineoutcome);
   results.appendChild(linescore);
   results.appendChild(finalwinner);





    button.addEventListener("click", () => { 
      const playerchoice = "rock";
      const computerchoice = getCmomputerChoice();
      const roundResults = playRound(playerchoice, computerchoice);
      linechoices.textContent = "You chose rock, and " + " computer chose " + computerchoice;
      lineoutcome.textContent = roundResults;
      linescore.textContent = "Score: Human " + humanscore + " Computer " + computerscore;
      if (humanscore === 5 || computerscore === 5)
        finalwinner.textContent = "Game is over";
    
    });
   
    
    button1.addEventListener("click", () => {
      const playerchoice = "scissors";
      const computerchoice = getCmomputerChoice();
      const roundResults = playRound(playerchoice, computerchoice);
      linechoices.textContent = "You chose scissors, and " + " computer chose " + computerchoice;
      lineoutcome.textContent = roundResults;
      linescore.textContent = "Score: Human " + humanscore + " Computer " + computerscore;
      if (humanscore === 5 || computerscore === 5)
        finalwinner.textContent = "Game is over!"
      


    });
    
    button2.addEventListener("click", () => {
      const playerchoice = "paper";
      const computerchoice = getCmomputerChoice();
      const roundResults = playRound(playerchoice, computerchoice);
      linechoices.textContent = "You chose paper, and " + " computer chose " + computerchoice;
      lineoutcome.textContent = roundResults;
      linescore.textContent = "Score: Human " + humanscore + " Computer " + computerscore;
      if (humanscore === 5 || computerscore === 5)
        finalwinner.textContent = "Game is over!";
      
    });
    

 



     



    

    





   


