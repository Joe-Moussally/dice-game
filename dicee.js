const dice1 = document.getElementsByClassName("img1");
const dice2 = document.getElementsByClassName("img2");
const title = document.getElementsByTagName("h1")
var x1; var x2; //variables from dice numbers

//function that runs the game
const rollDice = () => {
    x1 = getNumber()
    x2 = getNumber()

    dice1[0].src = "./images/dice"+x1+".png"
    dice2[0].src = "./images/dice"+x2+".png"

    if (x1 > x2) {
        title[0].innerHTML = "Player 1 Wins!"
    } else if (x2 > x1) {
        title[0].innerHTML = "Player 2 Wins!"
    } else {
        title[0].innerHTML = "Draw!"
    }
}

//function that returns a number between 1 and 6
const getNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
}

window.onload = () => {
    rollDice();
}