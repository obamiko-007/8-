document.querySelector('.flower-container').addEventListener('mouseover', () => {
    document.querySelectorAll('.petal').forEach(petal => {
        petal.style.animation = 'spin 2s infinite linear';
    });
});

document.querySelector('.flower-container').addEventListener('mouseout', () => {
    document.querySelectorAll('.petal').forEach(petal => {
        petal.style.animation = 'pulse 2s infinite ease-in-out';
    });
});

// Ключевые фразы появляются случайно
const messages = [
    "Вы уникальны!",
    "Пусть ваша улыбка освещает мир!",
    "Желаю вам безграничного счастья!"
];

setInterval(() => {
    const footer = document.querySelector('.footer');
    footer.textContent = messages[Math.floor(Math.random() * messages.length)];
}, 5000);

// Анимация "спасибо"
document.addEventListener('click', () => {
    alert("Спасибо, что зашли! С праздником!");
});
