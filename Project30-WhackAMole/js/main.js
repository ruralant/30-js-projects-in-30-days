// select all the holes
const holes = document.querySelectorAll('.hole');
// select the score box
const scoreBoard = document.querySelector('.score');
// select all the moles
const moles = document.querySelectorAll('.mole');
// game variables
let lastHole;
let timeUp = false;
let score = 0;

// time min and max and randomise
function randomTime(min, max) {
    return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes) {
    const index = Math.floor(Math.random() * holes.length);
    const hole = holes[index];
    // if the new hole is the same of the previous one, run again
    if (hole === lastHole) {
        return randomHole(holes);
    }
    lastHole = hole;
    return hole;
}

// select a random time and a random hole
function popUp() {
    const time = randomTime(200, 1000);
    const hole = randomHole(holes);
    // pop up the mole
    hole.classList.add('up');
    setTimeout(() => {
        // remove the mole after a random amout of time
        hole.classList.remove('up');
        if(!timeUp) popUp();
    }, time);
}

// start the game
function startGame() {
    // reset the score board
    scoreBoard.textContent = 0;
    timeUp = false;
    score = 0;
    popUp();
    // set the turn time to 10 seconds
    setTimeout(() => timeUp = true, 10000);
}

// hit function
function hit(e) {
    // avoid player to cheat
    if(!e.isTrusted) return;
    score++;
    console.log(this);
    this.classList.remove('up');
    scoreBoard.textContent = score;
}

// run the bonk fuction on a click event on a mole
moles.forEach(mole => addEventListener('click', hit));