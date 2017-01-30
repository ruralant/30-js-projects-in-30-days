const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];

function removeArticle(bandName) {
  return bandName.replace(/^(a |the |an)/i, '').trim();
}

// sort alfabetically

// ES5
// const sortBands = bands.sort(function(a, b) {
//   if(removeArticle(a) > removeArticle(b)) {
//     return 1;
//   } else {
//     return -1;
//   }
// });

// ES6
const sortBands = bands.sort((a, b) => removeArticle(a) > removeArticle(b) ? 1 : -1);

// grab the HTML id and show the ordered list on the page
document.querySelector('#bands').innerHTML = 
  sortBands
    .map(band => `<li>${band}</li>`)
    .join('')