console.log('Linked!');
// a Node List
const triggers = document.querySelectorAll('.cool > li');
// one element
const background = document.querySelector('.dropdownBackground');
const navbar = document.querySelector('.top');

// when the mouse is over
function mouseEnter() {
    //active the DIVs...
    this.classList.add('trigger-enter');
    //... and display them
    setTimeout(() => this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
    //add the background
    background.classList.add('open');

    //thanks to .this, it will be dinamic and will target just the selected DIV
    const dropdown = this.querySelector('.dropdown');
    //get the dropdown boundaries
    const dropdownCoordinates = dropdown.getBoundingClientRect();
    //get the navbar coordinates
    const navbarCoordinates = navbar.getBoundingClientRect();
    //combine them together 
    const coordinates = {
        height: dropdownCoordinates.height,
        width: dropdownCoordinates.width,
        top: dropdownCoordinates.top - navbarCoordinates.top,
        left: dropdownCoordinates.left - navbarCoordinates.left
    };

    //shape the background accordingly to the DIV dimentions
    background.style.setProperty('width', `${coordinates.width}px`);
    background.style.setProperty('height', `${coordinates.height}px`);
    background.style.setProperty('transform', `translate(${coordinates.left}px, ${coordinates.top}px)`);
}

// when the mouse exit from the DIVs
function mouseLeave() {
    //deactive the class and hide them
    this.classList.remove('trigger-enter', 'trigger-enter-active');
    //remove the background
    background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', mouseEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', mouseLeave));