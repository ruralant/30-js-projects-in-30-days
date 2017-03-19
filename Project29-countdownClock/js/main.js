let countdown;

//grab the DOM elements
const timerDisplay = document.querySelector('.display__time-left');
const endTime = document.querySelector('.display__end-time');
const buttons = document.querySelectorAll('[data-time]');


function timer(seconds) {
    // clear other timers
    clearInterval(countdown);

    //current time
    const now = Date.now();
    //finisching
    const end = now + seconds * 1000;

    showTimeLeft(seconds);
    displayEnd(end);

    countdown = setInterval(() => {
        const secondsLeft = Math.round((end - Date.now()) / 1000);
        //should not to go negative
        if(secondsLeft < 0) {
            clearInterval(countdown);
            return;
        }
        showTimeLeft(secondsLeft);
    }, 1000);
}

//setInterval is not starting immediatly and the first value is always undefined so we run it before the timer
function showTimeLeft(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsAfterMinutes = seconds % 60;

    // display the actual timer
    const display = `${minutes}:${secondsAfterMinutes < 10 ? '0' : ''}${secondsAfterMinutes}`;
    //update the title page on the browser tab
    document.title = display;
    timerDisplay.textContent = display;
}

function displayEnd(timestamp) {
    const endingTime = new Date(timestamp);
    const hour = endingTime.getHours();
    const minutes = endingTime.getMinutes();
    endTime.textContent = `Finishing at ${hour}:${minutes}`;
}

function startTimer() {
    // this will return the actual number associated with the button
    const seconds = parseInt(this.dataset.time);
    timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
document.customForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const mins = this.minutes.value;
    timer(mins * 60);
    this.reset();
});