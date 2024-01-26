console.log("tut 26 Exercise - 1 Guess the number")
let userconsent = confirm("DO YOU WANT TO PLAY THE GAME ?")
if (userconsent = true){
    let min = 1;
    let max =100;
    let answer = Math.floor(Math.random() * 100) + 1;
    let chances = 1
    let guess;

    while (running = true){
        guess = prompt("Guess a number between 1 - 100")
        guess = Number(guess);
        
        if(isNaN(guess)){
            alert("please enter a VALID NUMBER")
        }
        else if(guess < min || guess > max){
            alert("please enter a VALID NUMBER")
        }
        else{
            chances++;
            if(guess < answer){
                alert("TOO LOW! TRY HIGHER NUMBER")
            }
            else if(guess > answer){
                alert("TOO HIGH! TRY LOWER NUMBER ")
            } 
           else{
               alert(`CORRECT ANSWER! The NUMBER WAS ${answer} AND IT TOOK YOU ${chances} chances .`)
               alert("Your game score is : ", 101 - chances )
               running = false 
            break;
        } 
    }
}

}
else{
    alert("OK! MAY BE SOME ANOTHER TIME.")
}