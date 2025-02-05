document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.family-slide');
    const paginationButtons = document.querySelectorAll('.family-pagination-button');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${100 * (i - index)}%)`;
        });
        paginationButtons.forEach((button, i) => {
            button.classList.toggle('is-current', i === index);
        });
    }

    paginationButtons.forEach((button, index) => {
        button.addEventListener('click', () => {
            currentIndex = index;
            showSlide(currentIndex);
        });
    });

    // Initialize
    showSlide(currentIndex);
});