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

//creating an array to describe each individual card in the deck
const H2 = {value: 2, img: "/MainProject/ImgCards/2H.png"};
const D2 = {value: 2, img: "/MainProject/ImgCards/2D.png"};
const S2 = {value: 2, img: "/MainProject/ImgCards/2S.png"};
const C2 = {value: 2, img: "/MainProject/ImgCards/2C.png"};

const H3 = {value: 3, img: "/MainProject/ImgCards/3H.png"};
const D3 = {value: 3, img: "/MainProject/ImgCards/3D.png"};
const S3 = {value: 3, img: "/MainProject/ImgCards/3S.png"};
const C3 = {value: 3, img: "/MainProject/ImgCards/3C.png"};

const H4 = {value: 4, img: "/MainProject/ImgCards/4H.png"};
const D4 = {value: 4, img: "/MainProject/ImgCards/4D.png"};
const S4 = {value: 4, img: "/MainProject/ImgCards/4S.png"};
const C4 = {value: 4, img: "/MainProject/ImgCards/4C.png"};

const H5 = {value: 5, img: "/MainProject/ImgCards/5H.png"};
const D5 = {value: 5, img: "/MainProject/ImgCards/5D.png"};
const S5 = {value: 5, img: "/MainProject/ImgCards/5S.png"};
const C5 = {value: 5, img: "/MainProject/ImgCards/5C.png"};

const H6 = {value: 6, img: "/MainProject/ImgCards/6H.png"};
const D6 = {value: 6, img: "/MainProject/ImgCards/6D.png"};
const S6 = {value: 6, img: "/MainProject/ImgCards/6S.png"};
const C6 = {value: 6, img: "/MainProject/ImgCards/6C.png"};

const H7 = {value: 7, img: "/MainProject/ImgCards/7H.png"};
const D7 = {value: 7, img: "/MainProject/ImgCards/7D.png"};
const S7 = {value: 7, img: "/MainProject/ImgCards/7S.png"};
const C7 = {value: 7, img: "/MainProject/ImgCards/7C.png"};

const H8 = {value: 8, img: "/MainProject/ImgCards/8H.png"};
const D8 = {value: 8, img: "/MainProject/ImgCards/8D.png"};
const S8 = {value: 8, img: "/MainProject/ImgCards/8S.png"};
const C8 = {value: 8, img: "/MainProject/ImgCards/8C.png"};

const H9 = {value: 9, img: "/MainProject/ImgCards/9H.png"};
const D9 = {value: 9, img: "ImgCards/9D.png"};
const S9 = {value: 9, img: "/MainProject/ImgCards/9S.png"};
const C9 = {value: 9, img: "/MainProject/ImgCards/9C.png"};

const H10 = {value: 10, img: "/MainProject/ImgCards/10H.png"};
const D10 = {value: 10, img: "/MainProject/ImgCards/10D.png"};
const S10 = {value: 10, img: "/MainProject/ImgCards/10S.png"};
const C10 = {value: 10, img: "/MainProject/ImgCards/10C.png"};

const JH = {value: 11, img: "/MainProject/ImgCards/JH.png"};
const JD = {value: 11, img: "/MainProject/ImgCards/JD.png"};
const JS = {value: 11, img: "/MainProject/ImgCards/JS.png"};
const JC = {value: 11, img: "/MainProject/ImgCards/JC.png"};

const QH = {value: 12, img: "/MainProject/ImgCards/QH.png"};
const QD = {value: 12, img: "/MainProject/ImgCards/QD.png"};
const QS = {value: 12, img: "/MainProject/ImgCards/QS.png"};
const QC = {value: 12, img: "/MainProject/ImgCards/QC.png"};

const KH = {value: 13, img: "/MainProject/ImgCards/KH.png"};
const KD = {value: 13, img: "/MainProject/ImgCards/KD.png"};
const KS = {value: 13, img: "/MainProject/ImgCards/KS.png"};
const KC = {value: 13, img: "/MainProject/ImgCards/KC.png"};

const AH = {value: 14, img: "/MainProject/ImgCards/AH.png"};
const AD = {value: 14, img: "/MainProject/ImgCards/AD.png"};
const AS = {value: 14, img: "/MainProject/ImgCards/AS.png"};
const AC = {value: 14, img: "/MainProject/ImgCards/AC.png"};

const cards = [
    H2, D2, S2, C2, H3, D3, S3, C3, H4, D4, S4, C4, H5, 
    D5, S5, C5, H6, D6, S6, C6, H7, D7, S7, C7, H8, D8, 
    S8, C8, H9, D9, S9, C9, H10, D10, S10, C10, JH, JD, 
    JS, JC, QH, QD, QS, QC, KH, KD, KS, KC, AH, AD, AS, AC
];

//function to randomly select a unique pair of numbers to use as index items to select
//2 cards from the deck array
function generateRandom() {
    const originalArray = Array.from({ length: 52 }, (_, index) => index); 
    const usedIn = [];
    const result = [];

    while (usedIn.length < 52) {
        
        const available = originalArray.filter(index => !usedIn.includes(index));
        const firstIndex = available[Math.floor(Math.random() * available.length)];
        usedIn.push(firstIndex);

       
        const updatedAvailable = available.filter(index => index !== firstIndex);
        const secondIndex = updatedAvailable[Math.floor(Math.random() * updatedAvailable.length)];
        usedIn.push(secondIndex);

        result.push([firstIndex, secondIndex]);
    }

    return result;
}

const randomPairs = generateRandom();
console.log(randomPairs);

//when new game is pressed, clear the local storage
if (newGame) {
    newGame.addEventListener('click', () => {
        localStorage.clear();
    });
}

//create a new randomPairs array and store in local storage when you click the new game button
if (newGame) {
    newGame.addEventListener('click', () => {
        localStorage.setItem('randomPairs', JSON.stringify(randomPairs));
    });
}

//when new game is pressed store cards array in local storage
if (newGame) {
    newGame.addEventListener('click', () => {
        localStorage.setItem('cards', JSON.stringify(cards));
    });
}

//When deal button is clicked, use the array created from the generateRandom function 
//in order from 0 to 25 to select 2 cards from the cards array and display the card image and value
//in the html document

//return the value from position n + 1 in the randomPairs array adding 1 every time the deal button is clicked
let n = 0;
dealButton.addEventListener('click', () => {
    const randomPair = randomPairs[n];
    n++;
    const card1 = cards[randomPair[0]];
    const card2 = cards[randomPair[1]];

    userDeck.src = card1.img;
    userCount.textContent = card1.value;

    cpuDeck.src = card2.img;
    cpuCount.textContent = card2.value;
});

//when last element in array is reached, rerun the generateRandom function and store in local storage
//when deal button is clicked
dealButton.addEventListener('click', () => {
    if (n === 26) {
        const newRandomPairs = generateRandom();
        localStorage.setItem('randomPairs', JSON.stringify(newRandomPairs));
        n = 0;
    }
});


//when the play button is clicked, the value of the cards is compared and the winner is displayed
//in the html document
dealButton.addEventListener('click', () => {
    const userValue = parseInt(userCount.textContent);
    const cpuValue = parseInt(cpuCount.textContent);

    if (userValue > cpuValue) {
        winLossMsg.textContent = 'You Win!';
    } else if (cpuValue > userValue) {
        winLossMsg.textContent = 'You Lose!';
    } else {
        winLossMsg.textContent = 'Tie!';
    }
});
