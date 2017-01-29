// select the content
const hero = document.querySelector('.hero');
// select the text inside
const text = hero.querySelector('h1');
const walk = 300;

function shadow(e) {
  // ES5
  // const width = hero.offsetWidth;
  // const height = hero.offsetHeight;

  // ES6
  const { offsetWidth: width, offsetHeight: height } = hero;

  let { offsetX: x, offsetY: y } = e;

  // normalise the coordinate, regardless from the central div
  if(this !== e.target) {
    x = x + e.target.offsetLeft;
    y = y + e.target.offsetTop;
  }

  // the center would have coordinate 0,0. 
  const xWalk = Math.round((x / width * walk) - (walk / 2));
  const yWalk = Math.round((y / height * walk) - (walk / 2));

  // apply the shadow
  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 0 red,
    ${xWalk * -1}px ${yWalk}px 0 blue,
    ${yWalk}px ${xWalk}px 0 green,
    ${yWalk * -1}px ${xWalk}px 0 yellow
    `;
}

hero.addEventListener('mousemove', shadow);