/* design taken from the colorlib website vegefoods template made by shubham kumar all the code 
are written by shubham and without bootstrap and jquerry only raw css  */


// js for hero section 
let current = 0;
const slides = document.querySelectorAll('.slider-item');
const total = slides.length;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove('active');
    if (i === index) slide.classList.add('active');
  });
}

function nextSlide() {
  current = (current + 1) % total;
  showSlide(current);
}

setInterval(nextSlide, 4000); // Change every 5s

// hero section ends here


