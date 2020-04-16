console.log("Up and running!");

const cards = ["queen", "queen", "king", "king"];
const cardsInPlay = [];

let cardOne = cards[0];
let cardTwo = cards[1];

cardsInPlay.push(cardOne);
console.log("Card flipped - " + cardOne);

cardsInPlay.push(cardTwo);
console.log("Card flipped - " + cardTwo);

if(cardsInPlay.length === 2) {
    if(cardsInPlay[0] === cardsInPlay[1]) {
        alert("you found a match!");
    } else {
        alert("sorry, not a match");
    }
}