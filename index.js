let firstDice= document.querySelector(".img1");
let secondDice= document.querySelector(".img2");
let diceNumber1;
let diceNumber2;
function randomDice1() {
    let randomize1= Math.floor((Math.random()*6) +1);
    switch(randomize1) {
      case 1:
        firstDice.setAttribute("src", "images/dice1.png");
        diceNumber1= 1;
        break;
      case 2:
        firstDice.setAttribute("src", "images/dice2.png");
        diceNumber1= 2;
        break;
      case 3:
        firstDice.setAttribute("src", "images/dice3.png");
        diceNumber1= 3;
        break;
      case 4:
        firstDice.setAttribute("src", "images/dice4.png");
        diceNumber1= 4;
        break;
      case 5:
        firstDice.setAttribute("src", "images/dice5.png");
        diceNumber1= 5;
        break;
      case 6:
        firstDice.setAttribute("src", "images/dice6.png");
        diceNumber1= 6;
    }
}
randomDice1();

function randomDice2() {
    let randomize2= Math.floor((Math.random()*6) +1);
    switch(randomize2) {
      case 1:
        secondDice.setAttribute("src", "images/dice1.png");
        diceNumber2= 1;
        break;
      case 2:
        secondDice.setAttribute("src", "images/dice2.png");
        diceNumber2= 2;
        break;
      case 3:
        secondDice.setAttribute("src", "images/dice3.png");
        diceNumber2= 3;
        break;
      case 4:
        secondDice.setAttribute("src", "images/dice4.png");
        diceNumber2= 4;
        break;
      case 5:
        secondDice.setAttribute("src", "images/dice5.png");
        diceNumber2= 5;
        break;
      case 6:
        secondDice.setAttribute("src", "images/dice6.png");
        diceNumber2= 6;
    }
}
randomDice2();

let title= document.getElementsByTagName("h1")[0];
function heading() {
  if (diceNumber1 == diceNumber2) {
    title.innerText = "Draw";
  } else if (diceNumber1 > diceNumber2) {
    title.innerText = "Player 1 Wins";
  } else {
    title.innerText = "Player 2 Wins";
  }
}
heading();
