// grab the workspace
const panels = document.querySelectorAll('.panel');

// adding OPEN class when clicked
function toggleOpen() {
  this.classList.toggle('open');
}

// toggle the class if the aread clicked is a photo
function toggleActive(e) {
  if(e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panels => panels.addEventListener('click', toggleOpen));
panels.forEach(panels => panels.addEventListener('transitionend', toggleActive));