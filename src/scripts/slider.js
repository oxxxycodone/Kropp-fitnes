document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.banner-slide');
    const paginationButtons = document.querySelectorAll('.banner-pagination-button');
    let currentIndex = 0;

    function showSlide(index) {
        // Перемещаем слайды
        slides.forEach((slide, i) => {
            slide.style.transform = `translateX(${100 * (i - index)}%)`;
        });

        // Обновляем состояние кнопок пагинации
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

    // Инициализация
    showSlide(currentIndex);
});