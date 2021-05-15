
// rock 0 scissors 1 paper 2
function computerPlay(){
    return Math.floor(Math.random()*3);
}
 // -1 loss 0 draw  1 win     rock 0 scissors 1 paper 2
function playRound(playerSelection,computerSelection){
    if(playerSelection==computerSelection)return 0;
    if(playerSelection==2){    
        if(computerSelection==0)return 1;    // p win rock
        return -1;
    }
    if(playerSelection==1){
        if(computerSelection==2)return 1; // sis win pap
        return -1;
    }
    if(playerSelection==0){
        if(computerSelection==1)return 1;//  rock win sis
        return -1;
    }
}
function whowin(wins){
    if(wins==1)return "you win";
    if(wins==0)return "draw";
    return "you lose"
}

function whatActuallyChoose(Selection){
    if(Selection ==0) return "Rock"
    if(Selection ==1) return "Scissors"
    return "Paper";
}

 function game(playerSelection){ 

        if(playerScore>=5 ||computerScore>=5) return 0;   //  Score =5 game end

        let computerSelection = computerPlay();
        let wins=playRound(playerSelection,computerSelection);
       // document.getElementById("combatLog").innerHTML="";

    //   document.getElementById("combatLog").innerHTML="    "; 

        let para = document.createElement("p");
        let node = document.createTextNode("");
    

        if(wins==1){
            playerScore++;
            document.getElementById("yourscore").innerHTML=playerScore; 

            node =   document.createTextNode(whowin(wins)+" " +whatActuallyChoose(playerSelection)+" beats "+whatActuallyChoose(computerSelection) ); 
            }
        if(wins==-1){
            computerScore++;
            document.getElementById("cpscore").innerHTML=computerScore; 
            node =   document.createTextNode(whowin(wins)+" "+whatActuallyChoose(computerSelection)+" beats "+whatActuallyChoose(playerSelection)) ; 
            //document.getElementById("combatLog").innerHTML=  whowin(wins)+" " +whatActuallyChoose(computerSelection)+" beats "+whatActuallyChoose(playerSelection) ; 
            }
            let element = document.getElementById("message");
          
            para.appendChild(node); 

            element.appendChild(para);


            if(playerScore>=5 )   document.getElementById("combatLog").innerHTML="You win the game";
            if  (computerScore>=5)   document.getElementById("combatLog").innerHTML="You lose the game";
}

let playerScore=0;
let computerScore=0;
