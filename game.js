document.addEventListener('DOMContentLoaded', createGameBoard);
const cardArray = [{
    name: "condemn",
    image: "condemn.png"
},{
    name: "condemn",
    image: "condemn.png"
},{
  
    name: "condemn",
    image: "condemn.png"
},{
    name: "condemn",
    image: "condemn.png"
},{

    name: "flurry",
    image: "flurry.png"
},{
    name: "flurry",
    image: "flurry.png"
},{
    name: "flurry",
    image: "flurry.png"
},{
    name: "flurry",
    image: "flurry.png"
},{
    name: "kindling",
    image: "kindling.png"
},{
    name: "kindling",
    image: "kindling.png"
},{
    name: "kindling",
    image: "kindling.png"
},{
    name: "kindling",
    image: "kindling.png"
},{
    name: "pride",
    image: "pride.png"
},{
    name: "pride",
    image: "pride.png"
},{
    name: "pride",
    image: "pride.png"
},{
    name: "pride",
    image: "pride.png"
},{
    name: "sunwell",
    image: "sunwell.png"
},{
    name: "sunwell",
    image: "sunwell.png"
},{
    name: "sunwell",
    image: "sunwell.png"
},{
    name: "sunwell",
    image: "sunwell.png"
},{
    name: "tavish",
    image: "tavish.png"
},{
    name: "tavish",
    image: "tavish.png"
},{
    name: "tavish",
    image: "tavish.png"
},{
    name: "tavish",
    image: "tavish.png"
}];



function createGameBoard() {
    let gameboard = document.getElementById('GameBoard');

    let gridContainer = document.createElement('div');
    gridContainer.className = "grid";

    for(let i = 0; i < 24; i++){
    let item = document.createElement('div');
    item.className = 'item';
    
    let card = document.createElement('img');
    card.setAttribute('src' , 'card_back.png');
    card.setAttribute('id' , i);
    card.addEventListener('click' , flipCard);
    item.appendChild(card);
    gridContainer.appendChild(item);
}


gameboard.appendChild(gridContainer);
cardArray.sort(() => 0.5 - Math.random())

}

let cardChosen = []
let cardChosenId = []
let score = 0


function flipCard() {
   let cardId = this.getAttribute('id');
    this.setAttribute('src' , cardArray[cardId].image);
    cardChosen.push(cardArray[cardId]);
    cardChosenId.push(cardId);
    if (cardChosen.length ===2) {
        document.getElementById("gameConsole").textContent = "Checking....."
        setTimeout(checkForMatch, 500);
    }
}

function checkForMatch() {
    const cards = document.querySelectorAll('img');

    let selectedCardOne = cardChosenId[0];
    let selectedCardTwo = cardChosenId[1];

    let consoleMessage = " ";

    if (cardChosen[0].name === cardChosen[1].name) {
        cards[selectedCardOne].setAttribute('src' , 'blank.png');
        cards[selectedCardTwo].setAttribute('src' , 'blank.png');
        score = score + 1;
        consoleMessage = "You found a match!!"
    }else{
        cards[selectedCardOne].setAttribute('src' , 'card_back.png');
        cards[selectedCardTwo].setAttribute('src' , 'card_back.png');
        consoleMessage = "Sorry, try again..."
    }
    
    document.getElementById('gameScore').textContent = score;
    document.getElementById("gameConsole").textContent = consoleMessage;

    cardChosen = []
    cardChosenId = []
    
    if (score === cardArray.length / 2 ) {
        document.getElementById("gameConsole").textContent = 'Congratulations! You found them all.'

    }
}