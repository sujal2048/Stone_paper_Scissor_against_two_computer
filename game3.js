 const game = () => {
    let pScore = 0;
    let c1Score = 0;
    let c2Score = 0;
  
    //Start the Game
    const startGame = () => {
      const playBtn = document.querySelector(".intro button");
      const introScreen = document.querySelector(".intro");
      const match = document.querySelector(".match");
  
      playBtn.addEventListener("click", () => {
        introScreen.classList.add("fadeOut");
        match.classList.add("fadeIn");
      });
    };
    //Play Match
    const playMatch = () => {
      const options = document.querySelectorAll(".options button");
      const playerHand = document.querySelector(".player-hand");
      const computerHand1 = document.querySelector(".computer-hand1");
      const computerHand2 = document.querySelector(".computer-hand2");
      const hands = document.querySelectorAll(".hands img");
  
      hands.forEach(hand => {
        hand.addEventListener("animationend", function() {
          this.style.animation = "";
        });
      });
      //Computer Options
      const computerOptions = ["rock", "paper", "scissors"];
  
      options.forEach(option => {
        option.addEventListener("click", function() {
          //Computer Choice
          const computerNumber1 = Math.floor(Math.random() * 3);
          const computerChoice1 = computerOptions[computerNumber1];
          const computerNumber2 = Math.floor(Math.random() * 3);
          const computerChoice2 = computerOptions[computerNumber2];
          
  
          setTimeout(() => {
            //Here is where we call compare hands
            compareHands(this.textContent, computerChoice1 ,computerChoice2);
            //Update Images
            playerHand.src = `./assets/${this.textContent}.png`;
            computerHand1.src = `./assets/${computerChoice1}.png`;
            computerHand2.src = `./assets/${computerChoice2}.png`;
          }, 2000);
          //Animation
          playerHand.style.animation = "shakePlayer 2s ease";
          computerHand1.style.animation = "shakeComputer 2s ease";
          computerHand2.style.animation = "shakeComputer 2s ease";
        });
      });
    };
  
    const updateScore = () => {
      const playerScore = document.querySelector(".player-score p");
      const computerScore1 = document.querySelector(".computer-score1 p");
      const computerScore2 = document.querySelector(".computer-score2 p");
      playerScore.textContent = pScore;
      computerScore1.textContent = c1Score;
      computerScore2.textContent = c2Score;
    };
  
    const compareHands = (playerChoice, computerChoice1 , computerChoice2) => {
      //Update Text
      const winner = document.querySelector(".winner");
      //Checking for a tie
      if (playerChoice === computerChoice1) {
        if(playerChoice===computerChoice2){
        winner.textContent = "It is a tie";
        return;
        }
      }
      //Check for Rock
      if (playerChoice === "rock") 
      {  
        if (computerChoice1 === "scissors") 
        {
        if(computerChoice2 === "scissors")
        {
        winner.textContent = "Player Wins";
        pScore++;
        updateScore();
        return;
        }
        if (computerChoice2 === "rock") 
        {
        winner.textContent = "Player And Computer2 Wins";
        pScore++;
        c2Score++;
        updateScore();
        return;
        }
        if(computerChoice2 === "paper")
        {
        winner.textContent = "No One Wins";
        return;
        } 
      }
      if (computerChoice1 === "paper") 
      {
        if(computerChoice2==="paper")
        {
        winner.textContent = "Computer1 And Computer2 Wins";
        c1Score++;
        c2Score++;
        updateScore();
        return;
        }
        if(computerChoice2==="scissors")
        {
          winner.textContent = "No One One Wins";
          return;
        }
        if(computerChoice2==="rock")
        {
        winner.textContent = "Computer1 Wins";
        c1Score++;
        updateScore();
        return;
        }
      }
      if (computerChoice1 === "rock") 
      {
        if(computerChoice2==="paper")
        {
        winner.textContent = "Computer2 Wins";
        c2Score++;
        updateScore();
        return;
        }
        if(computerChoice2==="scissors")
        {
        winner.textContent = "Player And Computer1 Wins";
        pScore++;
        c1Score++;
        updateScore();
        return;
        }
       }
      }
      //Check for Paper
      if (playerChoice === "paper") 
      {
        if (computerChoice1 === "scissors") 
        {
          if(computerChoice2 === "scissors")
          {
          winner.textContent = "Computer1 And Computer2 Wins";
          c1Score++;
          c2Score++;
          updateScore();
          return;
          }
          if (computerChoice2 === "rock") 
          {
          winner.textContent = "No one wins";
          return;
          }
          if(computerChoice2 === "paper")
          {
          winner.textContent = "Computer1 Wins";
          c1Score++;
          updateScore();
          return;
          } 
        }
        if (computerChoice1 === "rock") 
        {
          if(computerChoice2==="rock")
          {
          winner.textContent = "Player Wins";
          pScore++;
          updateScore();
          return;
          }
          if(computerChoice2==="scissors")
          {
            winner.textContent = "No One  Wins";
            return;
          }
          if(computerChoice2==="paper")
          {
          winner.textContent = "Player And Computer2 Wins";
          pScore++;
          c2Score++;
          updateScore();
          return;
          }
        }
        if (computerChoice1 === "paper") 
        {
          if(computerChoice2==="rock")
          {
          winner.textContent = "Player And Computer1 Wins";
          pScore++;
          c1Score++;
          updateScore();
          return;
          }
          if(computerChoice2==="scissors")
          {
          winner.textContent = "Computer2 Wins";
          c2Score++;
          updateScore();
          return;
          }
        }
      }
      //Check for Scissors
      if (playerChoice === "scissors")
       {
        if (computerChoice1 === "rock") 
        {
          if(computerChoice2 === "rock")
          {
          winner.textContent = "Computer1 And Computer2 Wins";
          c1Score++;
          c2Score++;
          updateScore();
          return;
          }
          if(computerChoice2 === "paper")
          {
          winner.textContent = "No one wins";
          return;
          }
          if(computerChoice2 === "scissors")
          {
          winner.textContent = "Computer1 Wins";
          c1Score++;
          updateScore();
          return;
          }
         
        } 
        if (computerChoice1 === "paper") 
        {
          if(computerChoice2 === "paper")
          {
          winner.textContent = "Player";
          pScore++;
          updateScore();
          return;
          }
          if(computerChoice2 === "rock")
          {
          winner.textContent = "No one wins";
          return;
          }
          if(computerChoice2 === "scissors")
          {
          winner.textContent = "Draw Between Player And Computer2";
          c2Score++;
          pScore++;
          updateScore();
          return;
          }
        }
        if (computerChoice1 === "scissors") 
        {
          if(computerChoice2 === "rock")
          {
          winner.textContent = "Computer2 Wins";
          c2Score++;
          updateScore();
          return;
          }
          if(computerChoice2 === "paper")
          {
          winner.textContent = "Draw Between Player And Computer 1";
          pScore++;
          c1Score++;
          updateScore();
          return;
          }
        } 
      
        
      }
      

     
    };
    
    
  
    //Is call all the inner function
    startGame();
    playMatch();
  };
  
  //start the game function
  game();