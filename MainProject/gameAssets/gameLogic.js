//pulling in elements as variables from html document
const dealButton = document.querySelector('#dealButton');
const newGame = document.querySelector('#new-game');
const cpuDeck = document.querySelector('#computer-deck');
const cpuPlay = document.querySelector('#cpuPlay');
const cpuCount = document.querySelector('#cpuCount');
const userDeck = document.querySelector('#userDeck');
const userPlay = document.querySelector('#userPlay');
const userCount = document.querySelector('#userCount');
const winLossMsg = document.querySelector('#winLossMsg');
//creating an array to describe each individual card

const cards = [
    'AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH',
'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD',
'AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS',
'AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC'
]

const cardTotal = cards.length

//giving values to cards array

const cardObjects = []
for (let suit = 4; suit > 0; suit--) {
    for (let rank = 13; rank > 0; rank--) {
        cardObjects.push({
            suit: suit,
            rank: rank
        })
    }
}

function Card(suit, rank) {
    this.suit = suit;
    this.rank = rank;
}

function Deck() {
    this.cards = [];
    for (let suit = 4; suit > 0; suit--) {
        for (let rank = 13; rank > 0; rank--) {
            this.cards.push(new Card(suit, rank));
        }
    }

}

var deck= new Deck()


//shuffle function here
function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
    let j, x;
    j = Math.floor(Math.random() * (i + 1));
    x = a[i];
    a[i] = a[j];
    a[j] = x;
    a[j]=x;
}
}

