const carouselInner = document.querySelector(".carousel-inner");
const carouselItems = document.querySelectorAll(".carousel-item");
const prevButton = document.querySelector(".carousel-prev");
const nextButton = document.querySelector(".carousel-next");


let currentIndex = 0;


prevButton.addEventListener('click', () => {
    currentIndex = currentIndex - 1 < 0 ? carouselItems.length - 1 : currentIndex - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = currentIndex + 1 >= carouselItems.length ? 0 : currentIndex + 1;
    updateCarousel();
});


function updateCarousel() {
    carouselItems.forEach((item, index) => {
        item.classList.toggle('active', index === currentIndex);
    });
}

updateCarousel();





