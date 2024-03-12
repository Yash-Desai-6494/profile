document.addEventListener('DOMContentLoaded', function() {
    const readMoreBtn = document.querySelector('.read-more-btn');
    const aboutContent = document.querySelector('.about-content');

    readMoreBtn.addEventListener('click', function() {
        aboutContent.classList.toggle('show-content');
        if (readMoreBtn.textContent === 'Read More') {
            readMoreBtn.textContent = 'Read Less';
        } else {
            readMoreBtn.textContent = 'Read More';
        }
    });
});

