// grab all the hands
const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

function setDate() {
  // set the current time
  const now = new Date();
  // from the current time get the seconds
  const seconds = now.getSeconds();
  // from the current time get the minutes
  const mins = now.getMinutes();
  // from the current time get the hours
  const hours = now.getHours();

  // convert the seconds in degrees for animating the hand
  const secondsDegrees = ((seconds/60)*360) + 90;
  // convert the minutes in degrees for animating the hand
  const minsDegrees = ((mins/60)*360) + ((seconds/60)*6) + 90;
  // convert the hours in degrees for animating the hand
  const hoursDegrees = ((hours/12) * 360) + ((mins/60)*30) + 90;

  // apply the degrees to the hands
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  minsHand.style.transform = `rotate(${minsDegrees}deg)`;
  hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);