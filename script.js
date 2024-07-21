// window.addEventListener('load', () => {
//     gsap.from(["#start-end-container", ".game-box", ".header"], { 
//         duration:2, 
//         delay: 0,
//         x: '-100vw',
//         stagger: 0.28,
//         ease:"power1.out"
//     });
// });


function rotateDie() {
    gsap.fromTo(["#die-box1", "#die-box2"],  
        {rotate: 0}, 
        {
            rotate: 360
        }
    );
}


let s1 = 0; 
let s2 = 0; 
let gameStarted = false;
let player1Box = document.querySelector('.player-1-box');
let player2Box = document.querySelector('.player-2-box');

let player1Dice = document.querySelector('#die-box1');
let player2Dice = document.querySelector('#die-box2');

let case1 = `<div class="dot"></div>`
let case2 = `<div class="two" >
                <div class="dot"></div>
                <div class="dot"></div>
            </div>`

let case3 = `<div class"three"> 
                <div class="threefirstline"> 
                    <div class="dot"> </div>  
                </div>
                <div class="threemiddleline"> 
                    <div class="dot"> </div> 
                </div>
                <div class="threelastline"> 
                    <div class="dot"> </div>  
                </div>

            </div>`

let case4 = `<div class="four">
                <div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
                <div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
            </div>`

let case5 = `<div class="five">
                <div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
                <div class="center"> <div class="dot"> </div> </div>
                <div>
                    <div class="dot"></div>
                    <div class="dot"></div>
                </div>
            </div>`

let case6 = `<div class="six">
        <div class="sixfirstline">
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
        <div class="sixmiddleline">
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
        <div class="sixlastline">
            <div class="dot"></div>
            <div class="dot"></div>
        </div>
    </div>`

let vector = [case1, case2, case3, case4, case5, case6];



function random() {
    return Math.floor(Math.random() * 6) + 1; 
}

function rollDice() {
    if (!gameStarted) {
        alert('Start the game to roll the die');
        return;
    }
    rotateDie();


    let random1 = random();
    let random2 = random();
    // console.log(random1, random2);
    player1Dice.innerHTML = vector[random1 - 1];
    player2Dice.innerHTML = vector[random2 - 1];

    player1Box.style.backgroundColor = '';
    player2Box.style.backgroundColor = '';

    if (random1 > random2) {
        s1++;
        player1Box.style.backgroundColor = 'purple'; 
    } else if (random1 < random2) {
        s2++;
        player2Box.style.backgroundColor = 'purple'; 
    }
    else {
        player1Box.style.backgroundColor = 'purple';
        player2Box.style.backgroundColor = 'purple';
    }


    document.getElementById('score1').innerHTML = s1;
    document.getElementById('score2').innerHTML = s2;
}

function start() {
    s1 = 0;
    s2 = 0;
    document.getElementById('score1').innerHTML = s1;
    document.getElementById('score2').innerHTML = s2;
    player1Box.style.backgroundColor = '';
    player2Box.style.backgroundColor = '';

    gameStarted = true;
    // document.getElementById('rolldie').disabled = false;
    document.getElementById('result').innerHTML = ''; 
}

function end() {
    if (!gameStarted) {
        alert('First Start the game');
        return;
    }

    gameStarted = false; 
    // document.getElementById('rolldie').disabled = true; // Disable roll button

    let result = document.getElementById('result');

    if (s1 > s2) {
        result.innerHTML = 'Player 1 wins 🔥';
    } 
    else if (s2 > s1) {
        result.innerHTML = 'Player 2 wins 🔥';
    } 
    else {
        result.innerHTML = "It's a tie 🤭";
    }
}

document.getElementById('start').addEventListener('click', start);
document.getElementById('rolldie').addEventListener('click', rollDice);
document.getElementById('end').addEventListener('click', end);

