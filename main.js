// script.js
document.addEventListener('DOMContentLoaded', () => {
    const textBlock = document.getElementById('text-block');
    const button = document.getElementById('color-toggle-button');

    let isOriginalColor = true;
    const originalColor = window.getComputedStyle(textBlock).color;
    const newColor = 'red'; // Вы можете выбрать любой цвет

    button.addEventListener('click', () => {
        if (isOriginalColor) {
            textBlock.style.color = newColor;
        } else {
            textBlock.style.color = originalColor;
        }
        isOriginalColor = !isOriginalColor;
    });
});
