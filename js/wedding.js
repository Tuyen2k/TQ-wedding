
document.addEventListener('DOMContentLoaded', () => {
    const heart = document.querySelector('.heart');
    const envelopWrapper = document.querySelector('.envelope-wrapper');
    const chuHy = document.querySelector('.chu-hy');

    heart.addEventListener('click', () => {
        envelopWrapper.classList.toggle('flap');

        if (envelopWrapper.classList.contains('flap')) {
            envelopWrapper.classList.remove('scale-up-center');
            envelopWrapper.classList.add('scale-open');
        } else {
            envelopWrapper.classList.remove('scale-open');
            envelopWrapper.classList.add('scale-up-center');
        }
    });
});