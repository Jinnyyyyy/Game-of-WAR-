let cardV = {
    clubs: ["assets/clubs/clubs-A.svg",
    "assets/clubs/clubs-J.svg",
    "assets/clubs/clubs-K.svg",
    "assets/clubs/clubs-Q.svg",
    "assets/clubs/clubs-r02.svg",
    "assets/clubs/clubs-r03.svg",
    "assets/clubs/clubs-r04.svg",
    "assets/clubs/clubs-r05.svg",
    "assets/clubs/clubs-r06.svg",
    "assets/clubs/clubs-r07.svg",
    "assets/clubs/clubs-r08.svg",
    "assets/clubs/clubs-r09.svg",
    "assets/clubs/clubs-r10.svg"
    ],
    spades: ["assets/spades/spades-A.svg",
    "assets/spades/spades-J.svg",
    "assets/spades/spades-K.svg",
    "assets/spades/spades-Q.svg",
    "assets/spades/spades-r02.svg",
    "assets/spades/spades-r03.svg",
    "assets/spades/spades-r04.svg",
    "assets/spades/spades-r05.svg",
    "assets/spades/spades-r06.svg",
    "assets/spades/spades-r07.svg",
    "assets/spades/spades-r08.svg",
    "assets/spades/spades-r09.svg",
    "assets/spades/spades-r10.svg"
    ],
    diamonds: ["assets/diamonds/diamonds-A.svg",
    "assets/diamonds/diamonds-J.svg",
    "assets/diamonds/diamonds-K.svg",
    "assets/diamonds/diamonds-Q.svg",
    "assets/diamonds/diamonds-r02.svg",
    "assets/diamonds/diamonds-r03.svg",
    "assets/diamonds/diamonds-r04.svg",
    "assets/diamonds/diamonds-r05.svg",
    "assets/diamonds/diamonds-r06.svg",
    "assets/diamonds/diamonds-r07.svg",
    "assets/diamonds/diamonds-r08.svg",
    "assets/diamonds/diamonds-r09.svg",
    "assets/diamonds/diamonds-r10.svg"
    ],
    hearts: ["assets/hearts/hearts-A.svg",
    "assets/hearts/hearts-J.svg",
    "assets/hearts/hearts-K.svg",
    "assets/hearts/hearts-Q.svg",
    "assets/hearts/hearts-r02.svg",
    "assets/hearts/hearts-r03.svg",
    "assets/hearts/hearts-r04.svg",
    "assets/hearts/hearts-r05.svg",
    "assets/hearts/hearts-r06.svg",
    "assets/hearts/hearts-r07.svg",
    "assets/hearts/hearts-r08.svg",
    "assets/hearts/hearts-r09.svg",
    "assets/hearts/hearts-r10.svg"
    ]

};

let cardNumber = {
    clubs: [1,
    10,
    12,
    11,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0
    ],
    spades: [1,
    10,
    12,
    11,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0
    ],
    diamonds: [1,
    10,
    12,
    11,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0
    ],
    hearts: [1,
    10,
    12,
    11,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    0
    ]
};

let cardP1 = 0;
let cardP2 = 0;

let scoreP1 = 0; 
let scoreP2 = 0;

let card1 = document.getElementById('card1');
let card2 = document.getElementById('card2');
let winG = document.getElementById("winner").addEventListener("click", play);

let cardNum1;
let cardNum2;


let firstT = true;
let winnerE = true;

let assetsP;
let randomassets;
let finalR;

let nextP = document.getElementById("playBtn");
nextP.addEventListener('click',play)
let hideBtn = document.querySelector(".closeTab");
hideBtn.addEventListener('click',hide)

const styles = [cardV.hearts,cardV.spades,cardV.diamonds,cardV.clubs];

function hide() {
    document.querySelector("#alertTab").style.display='none';
};

function randomC () {
    assetsP = Math.floor(Math.random() * styles.length);
    randomassets = Math.floor(Math.random() * cardV.diamonds.length)
    assetsP2 = Math.floor(Math.random() * styles.length);
    randomassets2 = Math.floor(Math.random() * cardV.diamonds.length)
};

function play (evt){
    randomC()
if (assetsP == 1){
    card1.setAttribute('src',`${cardV.clubs[randomassets]}`)
    cardNum1 = cardNumber.clubs[randomassets]
} else if (assetsP == 2) {
    card1.setAttribute('src',`${cardV.spades[randomassets]}`)
    cardNum1 = cardNumber.spades[randomassets]
} else if (assetsP == 3){
    card1.setAttribute('src',`${cardV.diamonds[randomassets]}`)
    cardNum1 = cardNumber.diamonds[randomassets]
} else { 
    card1.setAttribute('src',`${cardV.hearts[randomassets]}`)
    cardNum1 = cardNumber.hearts[randomassets]
 };
 if (assetsP2 == 1){
    card2.setAttribute('src',`${cardV.clubs[randomassets2]}`)
    cardNum2 = cardNumber.clubs[randomassets2]
} else if (assetsP2 == 2) {
    card2.setAttribute('src',`${cardV.spades[randomassets2]}`)
    cardNum2 = cardNumber.spades[randomassets2]
} else if (assetsP2 == 3){
    card2.setAttribute('src',`${cardV.diamonds[randomassets2]}`)
    cardNum2 = cardNumber.diamonds[randomassets2]
} else { 
    card2.setAttribute('src',`${cardV.hearts[randomassets2]}`)
    cardNum2 = cardNumber.hearts[randomassets2]
 };
 console.log(cardNum1)
 console.log(cardNum2)
 compare(cardNum1,cardNum2)
}
console.log(cardP1,cardP2)

function compare (cardNum1,cardNum2) {
    if(cardNum1 > cardNum2){
        scoreP1 += cardNum1 + cardNum2 
        document.getElementById('winner').innerHTML = `Player 1 is win both cards ${scoreP1}`;
    }else if (cardNum1 < cardNum2) {
        scoreP2 += cardNum2 + cardNum1
        document.getElementById('winner').innerHTML = `Player 2 is win both cards ${scoreP2}`;
    } else { 
        document.getElementById('winner').innerHTML = 'Its WAR!';
    }
    console.log(scoreP1)
    console.log(scoreP2)
    winnerEnd(scoreP1,scoreP2);
}; 


function winnerEnd (scoreP1,scoreP2) {
    if(scoreP1 >= 75) {
        document.getElementById('winner').innerHTML = 'Player 1 is win game, GAME OVER';
        finalR = document.querySelector('#playBtn').disabled = true;
    } else if (scoreP2 >= 75) {
        document.getElementById('winner').innerHTML = 'Player 2 is win game,GAME OVER';
        finalR = document.querySelector('#playBtn').disabled = true;
    } else {
        
    }
}

   