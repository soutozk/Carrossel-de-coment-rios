let currentIndex = 0;

function showComment(index) {
    const items = document.querySelectorAll('.carousel-item');
    const totalItems = items.length;
    
    items.forEach((item, i) => {
        item.classList.remove('active');
        if (i === index) {
            item.classList.add('active');
        }
    });

    document.querySelector('.carousel-inner').style.transform = `translateX(-${index * 100}%)`;
}

function prevComment() {
    const items = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : items.length - 1;
    showComment(currentIndex);
}

function nextComment() {
    const items = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex < items.length - 1) ? currentIndex + 1 : 0;
    showComment(currentIndex);
}

document.addEventListener('DOMContentLoaded', () => {
    showComment(currentIndex);
});
