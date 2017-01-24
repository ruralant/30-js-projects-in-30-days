function debounce(func, wait = 20, immediate = true) {
  var timeout;
  return function() {
    var context = this, args = arguments;
    var later = function() {
      timeout = null;
      if (!immediate) func.apply(context, args);
    };
    var callNow = immediate && !timeout;
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
    if (callNow) func.apply(context, args);
  };
}

const images = document.querySelectorAll('.slide-in');

function checkSlide(e) {
  images.forEach(images => {
    // half way through the images
    const slideInAt = (window.scrollY + window.innerHeight) - images.height / 2;
    // bottom of the images
    const imageButtom = images.offsetTop + images.height;
    const isHalfShown = slideInAt > images.offsetTop;
    const isNotScrolledPast = window.scrollY < imageButtom;

    if(isHalfShown && isNotScrolledPast) {
      images.classList.add('active');
    } else {
      images.classList.remove('active');
    };
  });
};

window.addEventListener('scroll', debounce(checkSlide));