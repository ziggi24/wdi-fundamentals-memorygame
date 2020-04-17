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

function createBoard() {
    for(let i = 0; i < cards.length; i++){
        let cardElement = document.createElement('img');
        cardElement.setAttribute('src', 'images/back.png');
        cardElement.setAttribute('data-id', i);
        cardElement.addEventListener('click', flipCard);
        document.getElementById('game-board').appendChild(cardElement);
    }
};

function checkForMatch(){

    if(cardsInPlay.length === 2) {
        if(cardsInPlay[0] === cardsInPlay[1]) {
            alert("you found a match!");
        } else {
            alert("sorry, not a match");
        }
    }
};

function flipCard(){
    let cardID = this.getAttribute('data-id');
    
    console.log("User flipped " + cards[cardID].rank);
    cardsInPlay.push(cards[cardID].rank);

    console.log(cards[cardID].suit);
    console.log(cards[cardID].cardImage);

    this.setAttribute('src', cards[cardID].cardImage);
    checkForMatch();
};
createBoard();

