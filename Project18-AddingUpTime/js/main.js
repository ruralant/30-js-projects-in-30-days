// grab all the videos and convert the result in an array (from a Node)
const timesList = Array.from(document.querySelectorAll('[data-time]'));

// find every single duration
const seconds = timesList
  .map(node => node.dataset.time)
  .map(timeCode => {
    // from strings to numbers
    const [mins, secs] = timeCode.split(':').map(parseFloat);
    return (mins * 60) + secs;
  })
  // add all and find the total durations of the video's list
  .reduce((total, VideoSeconds) => total + VideoSeconds);

  let secondsLeft = seconds;
  // convert hours
  const hours = Math.floor(secondsLeft / 3600);
  // convert minutes
  secondsLeft = secondsLeft % 3600;
  const mins = Math.floor(secondsLeft / 60);
  secondsLeft = secondsLeft % 60;

  // total hours:minutes:seconds
  console.log(hours, mins, secondsLeft);