console.log("Up and running!");

const cards = [
    {
        rank: "queen",
        suit: "hearts",
        cardImage: "images/queen-of-hearts.png"
    },
    {
        rank: "queen",
        suit: "diamonds",
        cardImage: "images/queen-of-diamonds.png"
    },
    {
        rank: "king",
        suit: "hearts",
        cardImage: "images/king-of-hearts.png"
    },
    {
        rank: "king",
        suit: "diamonds",
        cardImage:"images/king-of-diamonds.png"
    }
];
const cardsInPlay = [];

function checkForMatch(){
    if(cardsInPlay.length === 2) {
        if(cardsInPlay[0] === cardsInPlay[1]) {
            alert("you found a match!");
        } else {
            alert("sorry, not a match");
        }
    }
};

function flipCard(cardID){
    
    console.log("User flipped " + cards[cardID].rank);
    cardsInPlay.push(cards[cardID].rank);

    console.log(cards[cardID].suit);
    console.log(cards[cardID].cardImage);

    checkForMatch();
};
flipCard(0);
flipCard(2);

