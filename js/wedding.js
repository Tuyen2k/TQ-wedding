document.addEventListener('DOMContentLoaded', () => {
    const heart = document.querySelector('.heart');
    const envelopWrapper = document.querySelector('.envelope-wrapper');
    const noteClickHeart = document.querySelector('#note-click-heart');
    const nameContainer = document.querySelector('#name-co__dau-chu__re');
    const arrowDown = document.querySelector('#arrow-down__hint');

    heart.addEventListener('click', () => {
        const isOpen = envelopWrapper.classList.toggle('flap');

        envelopWrapper.classList.toggle('scale-open', isOpen);
        envelopWrapper.classList.toggle('scale-up-center', !isOpen);
        noteClickHeart.classList.toggle('d-none', isOpen);
        nameContainer.classList.toggle('d-none', !isOpen);
        arrowDown.classList.toggle('d-none', !isOpen);
    });
});