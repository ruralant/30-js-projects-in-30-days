const divs = document.querySelectorAll('div');
const button = document.querySelector('button');

function logDiv(e) {
    console.log(this.classList.value);
    // this would stop the propagation and just one DIV will be selected. stop BUBBLING!
    e.stopPropagation();
}

divs.forEach(div => div.addEventListener('click', logDiv, {
    // boolean value that will switch between top-to-bottom and bottom-to-top.
    capture: false,
    // the event will run once and not again until we refresh the page
    once: true
}));

button.addEventListener('click', () => {
    console.log('clicked!');
}, {
    once: true
});