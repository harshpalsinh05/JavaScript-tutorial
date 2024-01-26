console.log("tut 21 Excercise - 2 Snake, Water and Gun");

/* Create Snake, Water & Gun in Js
The game should ask you to enter S, G or W.
The Computer should be able to randomly generate S, W or G and declare win or loss using alert */

let user = prompt("ENTER SNAKE, WATER or GUN")
let input = Math.floor(Math.random() * 3)
let npc = ["snake", "water", "gun"][input]

const match = () => {
    if (npc === user) {
        return "NOBODY WIN, GAME TIED"
    }
    else if (npc === "snake" && user === "water") {
        return "npc"
    }
    else if (npc === "gun" && user === "water") {
        return "user"
    }
    else if (npc === "snake" && user === "gun") {
        return "uesr"
    }
    else if (npc === "gun" && user === "snake") {
        return "npc"
    }
    else if (npc === "water" && user === "gun") {
        return "npc"
    }
    else if (npc === "water" && user === "snake") {
        return "npc"
    }
}

let result = match(npc, user)
alert("The Winner is :" + result)

if (npc === user) {
    alert(`npc chooses: ${npc} \nYou chooses ${user} \nmatch tied`)
}
else if (result === "user") {
    alert(`npc chooses: ${npc} \nYou chooses ${user} \nYou won the game`)
}
else if (result === "npc") {
    alert(`npc chooses ${npc} \nYou chooses ${user} \nYou Lose the game`)
}
else {
    alert("INPUT INVALID, TRY AGAIN!")
}
