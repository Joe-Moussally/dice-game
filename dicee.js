const dice1 = document.getElementsByClassName("img1");
const dice2 = document.getElementsByClassName("img2");
var x1; var x2; //variables from dice numbers
window.onload = () => {
    rollDice();
}

const rollDice = () => {
    
}

//function that returns a number between 1 and 6
const getNumber = () => {
    return Math.floor(Math.random() * 6) + 1;
}