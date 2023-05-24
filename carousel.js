const track = document.querySelector('.carousel__track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel__button--right');
const prevButton = document.querySelector('.carousel__button--left');
const dotsNav = document.querySelector('.carousel__nav');
const dots = Array.from(dotsNav.children);
const slideWidth = slides[0].getBoundingClientRect().width;

/* Arrage the slides next to one of another */
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
};
slides.forEach(setSlidePosition);

/* When I click left, move slides to the left */


/* When I clock right, move slides to the right */
nextButton.addEventListener('click', e => {
    /* move slide */
    const currentSlide = track.document.querySelector('.current-slide');
})

/* When I clock the nav indicatior, move to that slide */