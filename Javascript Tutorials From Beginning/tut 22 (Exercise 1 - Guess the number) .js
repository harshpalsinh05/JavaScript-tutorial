console.log("tut 22 Exercise - 1 Guess the number")
// Q game a guess the number game using a math.random refrence
// game should have only 1 - 100 number for guessing and the chances should be also counted
// give a score on the bases of the number chances taken by user


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


// let number = Math.floor(Math.random() * 100) + 1; // ref : google
// let guessed, chance = 1;

// do {
//   guessed = prompt("Guess the number between 1 to 100 : ")

//   if (guessed > number) {
//     console.log("   Lowwer number, please !!!")
//     chance++;
//   }
//   else if (guessed < number) {
//     console.log("   Higher number, please !!!")
//     chance++;
//   }
//   else {
//     console.log("   **yehh**")
//     console.log("You guessed it in ", chance, " attemps ")
//     console.log("your score is : ", 101 - chance)
//   }

// } while (guessed != number)