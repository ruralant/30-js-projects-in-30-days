const speed = document.querySelector('.speed');
const bar = document.querySelector('.speed-bar');
const video = document.querySelector('.flex');

function handleMove(e) {
    // get the Y
    const y = e.pageY - this.offsetTop;
    // change it persentage 
    const percent = y / this.offsetHeight;
    // min speed
    const min = 0.4;
    // max speed
    const max = 4;
    // bar height in perrcentages
    const height = Math.round(percent * 100) + '%';
    const playbackRate = percent * (max - min) + min;
    //link the bar with the height
    bar.style.height = height;
    //update the displeyed percentage
    bar.textContent = playbackRate.toFixed(2) + 'x';
    // then applay the value to the video
    video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', handleMove);