let totalAttempts = 10;
let attemps = 0;
let totalWons = 0;
let totallosts = 0;  


const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const guessingNumber = form.querySelector("#guessNumber");
const checkButton = form.querySelector("#check");
const result = cardBody.querySelector(".resultText");
const lostWonMessage = document.createElement("p");
const remainingAttemps = cardBody.querySelector(".remainingAttemps");


form.addEventListener("submit", (e) => {
    e.preventDefault();
    
    attemps++;
    if(attemps > 10){
        guessingNumber.disabled = true;
        checkButton.disabled = true;
    }if(attemps <11){
        let guessNumber = Number(guessingNumber.value);
        checkResult(guessNumber);
        remainingAttemps.innerHTML = `Remining attemps ${totalAttempts - attemps}`;
    }
    guessingNumber.value = "";
})

function checkResult(guessingNumber){
    
    const randonNumber = getRandomNumber(10);
    if(guessingNumber ==  randonNumber){
        result.innerHTML = `You have Won `;
        totalWons++;
    }else{
        result.innerHTML = `You have lost; random number was ${randonNumber}`;
        totallosts++;
        // remainingAttemps.textContent = 10 - remainingAttemps; 
        

    }
    lostWonMessage.innerHTML = `won ${totalWons}  lost ${totallosts} times`;
    lostWonMessage.classList.add("large-text");
    cardBody.appendChild(lostWonMessage);
}

function getRandomNumber(limit){
    return Math.floor(Math.random() * limit) + 1;
}