const slides = document.querySelectorAll(".carousel-slide");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let currentSlide = 0;

nextButton.addEventListener("click", () => {
    goToSlide(currentSlide + 1);
});

prevButton.addEventListener("click", () => {
    goToSlide(currentSlide - 1);
});

function goToSlide(n) {
    if (n < 0) {
        currentSlide = slides.length - 1;
    } else if (n >= slides.length) {
        currentSlide = 0;
    } else {
        currentSlide = n;
    }
    
    const offset = -currentSlide * 100;
    slides.forEach((slide) => {
        slide.style.transform = `translateX(${offset}%)`;
    });
}
