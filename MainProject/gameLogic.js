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



//2 Cards
const H2 = "2";
const D2 = "2";
const S2 = "2";
const C2 = "2";

//3 Cards
const H3 = "3";
const D3 = "3";
const S3 = "3";
const C3 = "3";

//4 Cards
const H4 = "4";
const D4 = "4";
const S4 = "4";
const C4 = "4";

//5 Cards
const H5 = "5";
const D5 = "5";
const S5 = "5";
const C5 = "5";

//6 Cards
const H6 = "6";
const D6 = "6";
const S6 = "6";
const C6 = "6";

//7 Cards
const H7 = "7";
const D7 = "7";
const S7 = "7";
const C7 = "7";

//8 Cards
const H8 = "8";
const D8 = "8";
const S8 = "8";
const C8 = "8";

//9 Cards
const H9 = "9";
const D9 = "9";
const S9 = "9";
const C9 = "9";

//10 Cards
const H10 = "10";
const D10 = "10";
const S10 = "10";
const C10 = "10";

//Jack Cards
const JH = "11";
const JD = "11";
const JS = "11";
const JC = "11";

//Queen Cards
const QH = "12";
const QD = "12";
const QS = "12";
const QC = "12";

//King Cards
const KH = "13";
const KD = "13";
const KS = "13";
const KC = "13";

//Ace Cards
const AH = "14";
const AD = "14";
const AS = "14";
const AC = "14";

const cards = [
    H2, D2, S2, C2, H3, D3, S3, C3, H4, D4, S4, C4, H5, 
    D5, S5, C5, H6, D6, S6, C6, H7, D7, S7, C7, H8, D8, 
    S8, C8, H9, D9, S9, C9, H10, D10, S10, C10, JH, JD, 
    JS, JC, QH, QD, QS, QC, KH, KD, KS, KC, AH, AD, AS, AC
];