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

// const cards = [
//     'AH', '2H', '3H', '4H', '5H', '6H', '7H', '8H', '9H', '10H', 'JH', 'QH', 'KH',
// 'AD', '2D', '3D', '4D', '5D', '6D', '7D', '8D', '9D', '10D', 'JD', 'QD', 'KD',
// 'AS', '2S', '3S', '4S', '5S', '6S', '7S', '8S', '9S', '10S', 'JS', 'QS', 'KS',
// 'AC', '2C', '3C', '4C', '5C', '6C', '7C', '8C', '9C', '10C', 'JC', 'QC', 'KC'
// ]
//Assign value and Image to each card
const H2 = {value: 2, img: "ImgCards/2H.png"};
const D2 = {value: 2, img: "ImgCards/2D.png"};
const S2 = {value: 2, img: "ImgCards/2S.png"};
const C2 = {value: 2, img: "ImgCards/2C.png"};

const H3 = {value: 3, img: "ImgCards/3H.png"};
const D3 = {value: 3, img: "ImgCards/3D.png"};
const S3 = {value: 3, img: "ImgCards/3S.png"};
const C3 = {value: 3, img: "ImgCards/3C.png"};

const H4 = {value: 4, img: "ImgCards/4H.png"};
const D4 = {value: 4, img: "ImgCards/4D.png"};
const S4 = {value: 4, img: "ImgCards/4S.png"};
const C4 = {value: 4, img: "ImgCards/4C.png"};

const H5 = {value: 5, img: "ImgCards/5H.png"};
const D5 = {value: 5, img: "ImgCards/5D.png"};
const S5 = {value: 5, img: "ImgCards/5S.png"};
const C5 = {value: 5, img: "ImgCards/5C.png"};

const H6 = {value: 6, img: "ImgCards/6H.png"};
const D6 = {value: 6, img: "ImgCards/6D.png"};
const S6 = {value: 6, img: "ImgCards/6S.png"};
const C6 = {value: 6, img: "ImgCards/6C.png"};

const H7 = {value: 7, img: "ImgCards/7H.png"};
const D7 = {value: 7, img: "ImgCards/7D.png"};
const S7 = {value: 7, img: "ImgCards/7S.png"};
const C7 = {value: 7, img: "ImgCards/7C.png"};

const H8 = {value: 8, img: "ImgCards/8H.png"};
const D8 = {value: 8, img: "ImgCards/8D.png"};
const S8 = {value: 8, img: "ImgCards/8S.png"};
const C8 = {value: 8, img: "ImgCards/8C.png"};

const H9 = {value: 9, img: "ImgCards/9H.png"};
const D9 = {value: 9, img: "ImgCards/9D.png"};
const S9 = {value: 9, img: "ImgCards/9S.png"};
const C9 = {value: 9, img: "ImgCards/9C.png"};

const H10 = {value: 10, img: "ImgCards/10H.png"};
const D10 = {value: 10, img: "ImgCards/10D.png"};
const S10 = {value: 10, img: "ImgCards/10S.png"};
const C10 = {value: 10, img: "ImgCards/10C.png"};

const JH = {value: 11, img: "ImgCards/JH.png"};
const JD = {value: 11, img: "ImgCards/JD.png"};
const JS = {value: 11, img: "ImgCards/JS.png"};
const JC = {value: 11, img: "ImgCards/JC.png"};

const QH = {value: 12, img: "ImgCards/QH.png"};
const QD = {value: 12, img: "ImgCards/QD.png"};
const QS = {value: 12, img: "ImgCards/QS.png"};
const QC = {value: 12, img: "ImgCards/QC.png"};

const KH = {value: 13, img: "ImgCards/KH.png"};
const KD = {value: 13, img: "ImgCards/KD.png"};
const KS = {value: 13, img: "ImgCards/KS.png"};
const KC = {value: 13, img: "ImgCards/KC.png"};

const AH = {value: 14, img: "ImgCards/AH.png"};
const AD = {value: 14, img: "ImgCards/AD.png"};
const AS = {value: 14, img: "ImgCards/AS.png"};
const AC = {value: 14, img: "ImgCards/AC.png"};


// //2 Cards Value and Image
// const H2 = "2", 
// const D2 = "2";
// const S2 = "2";
// const C2 = "2";

// //3 Cards
// const H3 = "3";
// const D3 = "3";
// const S3 = "3";
// const C3 = "3";

// //4 Cards
// const H4 = "4";
// const D4 = "4";
// const S4 = "4";
// const C4 = "4";

// //5 Cards
// const H5 = "5";
// const D5 = "5";
// const S5 = "5";
// const C5 = "5";

// //6 Cards
// const H6 = "6";
// const D6 = "6";
// const S6 = "6";
// const C6 = "6";

// //7 Cards
// const H7 = "7";
// const D7 = "7";
// const S7 = "7";
// const C7 = "7";

// //8 Cards
// const H8 = "8";
// const D8 = "8";
// const S8 = "8";
// const C8 = "8";

// //9 Cards
// const H9 = "9";
// const D9 = "9";
// const S9 = "9";
// const C9 = "9";

// //10 Cards
// const H10 = "10";
// const D10 = "10";
// const S10 = "10";
// const C10 = "10";

// //Jack Cards
// const JH = "11";
// const JD = "11";
// const JS = "11";
// const JC = "11";

// //Queen Cards
// const QH = "12";
// const QD = "12";
// const QS = "12";
// const QC = "12";

// //King Cards
// const KH = "13";
// const KD = "13";
// const KS = "13";
// const KC = "13";

// //Ace Cards Value and Image
// const AH = "14";
// const AD = "14";
// const AS = "14";
// const AC = "14";

//Assign image to each card
// const H2Img = "ImgCards/2H.png";
// const D2Img = "ImgCards/2D.png";
// const S2Img = "ImgCards/2S.png";
// const C2Img = "ImgCards/2C.png";
// const H3Img = "ImgCards/3H.png";
// const D3Img = "ImgCards/3D.png";
// const S3Img = "ImgCards/3S.png";
// const C3Img = "ImgCards/3C.png";
// const H4Img = "ImgCards/4H.png";
// const D4Img = "ImgCards/4D.png";
// const S4Img = "ImgCards/4S.png";
// const C4Img = "ImgCards/4C.png";
// const H5Img = "ImgCards/5H.png";
// const D5Img = "ImgCards/5D.png";
// const S5Img = "ImgCards/5S.png";
// const C5Img = "ImgCards/5C.png";
// const H6Img = "ImgCards/6H.png";
// const D6Img = "ImgCards/6D.png";
// const S6Img = "ImgCards/6S.png";
// const C6Img = "ImgCards/6C.png";
// const H7Img = "ImgCards/7H.png";
// const D7Img = "ImgCards/7D.png";
// const S7Img = "ImgCards/7S.png";
// const C7Img = "ImgCards/7C.png";
// const H8Img = "ImgCards/8H.png";
// const D8Img = "ImgCards/8D.png";
// const S8Img = "ImgCards/8S.png";
// const C8Img = "ImgCards/8C.png";
// const H9Img = "ImgCards/9H.png";
// const D9Img = "ImgCards/9D.png";
// const S9Img = "ImgCards/9S.png";
// const C9Img = "ImgCards/9C.png";
// const H10Img = "ImgCards/10H.png";
// const D10Img = "ImgCards/10D.png";
// const S10Img = "ImgCards/10S.png";
// const C10Img = "ImgCards/10C.png";
// const JHImg = "ImgCards/JH.png";
// const JDImg = "ImgCards/JD.png";
// const JSImg = "ImgCards/JS.png";
// const JCImg = "ImgCards/JC.png";
// const QHImg = "ImgCards/QH.png";
// const QDImg = "ImgCards/QD.png";
// const QSImg = "ImgCards/QS.png";
// const QCImg = "ImgCards/QC.png";
// const KHImg = "ImgCards/KH.png";
// const KDImg = "ImgCards/KD.png";
// const KSImg = "ImgCards/KS.png";
// const KCImg = "ImgCards/KC.png";
// const AHImg = "ImgCards/AH.png";
// const ADImg = "ImgCards/AD.png";
// const ASImg = "ImgCards/AS.png";
// const ACImg = "ImgCards/AC.png";

//link each card from cards array to its image
// const cardsImg = [
//     H2Img, D2Img, S2Img, C2Img, H3Img, D3Img, S3Img, C3Img, H4Img, D4Img, S4Img, C4Img, H5Img, 
//     D5Img, S5Img, C5Img, H6Img, D6Img, S6Img, C6Img, H7Img, D7Img, S7Img, C7Img, H8Img, D8Img, 
//     S8Img, C8Img, H9Img, D9Img, S9Img, C9Img, H10Img, D10Img, S10Img, C10Img, JHImg, JDImg, 
//     JSImg, JCImg, QHImg, QDImg, QSImg, QCImg, KHImg, KDImg, KSImg, KCImg, AHImg, ADImg, ASImg, ACImg
// ];

//creating an array to describe each individual card

const cards = [
    H2, D2, S2, C2, H3, D3, S3, C3, H4, D4, S4, C4, H5, 
    D5, S5, C5, H6, D6, S6, C6, H7, D7, S7, C7, H8, D8, 
    S8, C8, H9, D9, S9, C9, H10, D10, S10, C10, JH, JD, 
    JS, JC, QH, QD, QS, QC, KH, KD, KS, KC, AH, AD, AS, AC
];
//when new game is pressed, clear the local storage
if (newGame) {
    newGame.addEventListener('click', () => {
        localStorage.clear();
    });
}

//when new game is pressed store cards array in local storage
if (newGame) {
    newGame.addEventListener('click', () => {
        localStorage.setItem('cards', JSON.stringify(cards));
    });
}


//creating variables to hold the deck of cards
let userDeckCards = [];
let cpuDeckCards = [];
let userPlayCards = [];
let cpuPlayCards = [];

//creating a function to deal 1 card to each player upon clicking the deal button
//the function will also remove the card from the deck which means the deck will be reduced by 2 cards
//each use of the deal button will randomly choose 2 cards and display them in local storage
function dealCard() {
    let userCard = cards[Math.floor(Math.random() * cards.length)];
    let cpuCard = cards[Math.floor(Math.random() * cards.length)];
    userDeckCards.push(userCard);
    cpuDeckCards.push(cpuCard);
    localStorage.setItem('userDeck', JSON.stringify(userDeckCards));
    localStorage.setItem('cpuDeck', JSON.stringify(cpuDeckCards));
    console.log(userCard, cpuCard);
}

//test function to see if cards are being dealt correctly
if (dealButton) {
    dealButton.addEventListener('click', dealCard);
}

//when the deal button is clicked, the user and cpu decks will be updated in local storage
if (dealButton) {
    dealButton.addEventListener('click', () => {
        localStorage.setItem('userDeck', JSON.stringify(userDeckCards));
        localStorage.setItem('cpuDeck', JSON.stringify(cpuDeckCards));
    });
}

//when deal button is clicked, display the user card value and image in the html document
