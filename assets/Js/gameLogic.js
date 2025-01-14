//pulling in elements as variables from html document
const dealButton = document.querySelector('#dealButton');
const newGame = document.querySelector('#new-game');
const cpuDeck = document.querySelector('#cpuDeck');
const cpuPlay = document.querySelector('#cpuPlay');
const cpuCount = document.querySelector('#cpuCount');
const userDeck = document.querySelector('#userDeck');
const userPlay = document.querySelector('#userPlay');
const userCount = document.querySelector('#userCount');
const winLossMsg = document.querySelector('#winLossMsg');
const userScore = document.querySelector('#userScore');
const cpuScore = document.querySelector('#cpuScore');
const cpuCard = document.querySelector('#cpuCard');
const userCard = document.querySelector('#userCard');

//creating an array to describe each individual card in the deck
const H2 = {value: 2, img: "/assets/ImgCards/2_of_hearts.png"};
const D2 = {value: 2, img: "/assets/ImgCards/2_of_diamonds.png"};
const S2 = {value: 2, img: "/assets/ImgCards/2_of_spades.png"};
const C2 = {value: 2, img: "/assets/ImgCards/2_of_clubs.png"};

const H3 = {value: 3, img: "/assets/ImgCards/3_of_hearts.png"};
const D3 = {value: 3, img: "/assets/ImgCards/3_of_diamonds.png"};
const S3 = {value: 3, img: "/assets/ImgCards/3_of_spades.png"};
const C3 = {value: 3, img: "/assets/ImgCards/3_of_clubs.png"};

const H4 = {value: 4, img: "/assets/ImgCards/4_of_hearts.png"};
const D4 = {value: 4, img: "/assets/ImgCards/4_of_diamonds.png"};
const S4 = {value: 4, img: "/assets/ImgCards/4_of_spades.png"};
const C4 = {value: 4, img: "/assets/ImgCards/4_of_clubs.png"};

const H5 = {value: 5, img: "/assets/ImgCards/5_of_hearts.png"};
const D5 = {value: 5, img: "/assets/ImgCards/5_of_diamonds.png"};
const S5 = {value: 5, img: "/assets/ImgCards/5_of_spades.png"};
const C5 = {value: 5, img: "/assets/ImgCards/5_of_clubs.png"};

const H6 = {value: 6, img: "/assets/ImgCards/6_of_hearts.png"};
const D6 = {value: 6, img: "/assets/ImgCards/6_of_diamonds.png"};
const S6 = {value: 6, img: "/assets/ImgCards/6_of_spades.png"};
const C6 = {value: 6, img: "/assets/ImgCards/6_of_clubs.png"};

const H7 = {value: 7, img: "/assets/ImgCards/7_of_hearts.png"};
const D7 = {value: 7, img: "/assets/ImgCards/7_of_diamonds.png"};
const S7 = {value: 7, img: "/assets/ImgCards/7_of_spades.png"};
const C7 = {value: 7, img: "/assets/ImgCards/7_of_clubs.png"};

const H8 = {value: 8, img: "/assets/ImgCards/8_of_hearts.png"};
const D8 = {value: 8, img: "/assets/ImgCards/8_of_diamonds.png"};
const S8 = {value: 8, img: "/assets/ImgCards/8_of_spades.png"};
const C8 = {value: 8, img: "/assets/ImgCards/8_of_clubs.png"};

const H9 = {value: 9, img: "/assets/ImgCards/9_of_hearts.png"};
const D9 = {value: 9, img: "/assets/ImgCards/9_of_diamonds.png"};
const S9 = {value: 9, img: "/assets/ImgCards/9_of_spades.png"};
const C9 = {value: 9, img: "/assets/ImgCards/9_of_clubs.png"};

const H10 = {value: 10, img: "/assets/ImgCards/10_of_hearts.png"};
const D10 = {value: 10, img: "/assets/ImgCards/10_of_diamonds.png"};
const S10 = {value: 10, img: "/assets/ImgCards/10_of_spades.png"};
const C10 = {value: 10, img: "/assets/ImgCards/10_of_clubs.png"};

const JH = {value: 11, img: "/assets/ImgCards/jack_of_hearts.png"};
const JD = {value: 11, img: "/assets/ImgCards/jack_of_diamonds.png"};
const JS = {value: 11, img: "/assets/ImgCards/jack_of_spades.png"};
const JC = {value: 11, img: "/assets/ImgCards/jack_of_clubs.png"};

const QH = {value: 12, img: "/assets/ImgCards/queen_of_hearts.png"};
const QD = {value: 12, img: "/assets/ImgCards/queen_of_diamonds.png"};
const QS = {value: 12, img: "/assets/ImgCards/queen_of_spades.png"};
const QC = {value: 12, img: "/assets/ImgCards/queen_of_clubs.png"};

const KH = {value: 13, img: "/assets/ImgCards/king_of_hearts.png"};
const KD = {value: 13, img: "/assets/ImgCards/king_of_diamonds.png"};
const KS = {value: 13, img: "/assets/ImgCards/king_of_spades.png"};
const KC = {value: 13, img: "/assets/ImgCards/king_of_clubs.png"};

const AH = {value: 14, img: "/assets/ImgCards/ace_of_hearts.png"};
const AD = {value: 14, img: "/assets/ImgCards/ace_of_diamonds.png"};
const AS = {value: 14, img: "/assets/ImgCards/ace_of_spades.png"};
const AC = {value: 14, img: "/assets/ImgCards/ace_of_clubs.png"};

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

//Starting the game with the new game button will reset the player and cpu count to 26
if (newGame) {
    newGame.addEventListener('click', () => {
        userScore.textContent = 26;
        cpuScore.textContent = 26;
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

    userCard.src = card1.img;
    userCount.textContent = card1.value;

    cpuCard.src = card2.img;
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


//when the deal button is clicked, the player and cpu score 
// will be updated based on the winner of the round
dealButton.addEventListener('click', () => {
    const userValue = parseInt(userCount.textContent);
    const cpuValue = parseInt(cpuCount.textContent);

    if (userValue > cpuValue) {
        userScore.textContent = parseInt(userScore.textContent) + 1;
        cpuScore.textContent = parseInt(cpuScore.textContent) - 1;
    } else if (cpuValue > userValue) {
        userScore.textContent = parseInt(userScore.textContent) - 1;
        cpuScore.textContent = parseInt(cpuScore.textContent) + 1;
    }
});

//save the userScore and cpuScore in local storage when the deal button is clicked
dealButton.addEventListener('click', () => {
    localStorage.setItem('userScore', userScore.textContent);
    localStorage.setItem('cpuScore', cpuScore.textContent);
});

//when the deal button is clicked, if the user score reaches 0, the cpu wins
//if the cpu score reaches 0, the user wins
dealButton.addEventListener('click', () => {
    if (userScore.textContent === '0') {
        winLossMsg.textContent = 'Computer Wins!';
    } else if (cpuScore.textContent === '0') {
        winLossMsg.textContent = 'You Win!';
    }
});

//the winner of the game is displayed in the html document
dealButton.addEventListener('click', () => {
    if (userScore.textContent === '0' || cpuScore.textContent === '0') {
        winLossMsg.textContent = 'Game Over!';
    }
});

//once any of the scores reach 0, the deal button is disabled
dealButton.addEventListener('click', () => {
    if (userScore.textContent === '0' || cpuScore.textContent === '0') {
        dealButton.style.display = 'none';
    }
});

//count the number of times the deal button is clicked, once it reaches 52, the deal button disappears
// let count = 0;
// dealButton.addEventListener('click', () => {
//     count++;
//     if (count === 10) {
//         dealButton.style.display = 'none';
//         winLossMsg.textContent = 'Game Over!' + ;
//     }
// });