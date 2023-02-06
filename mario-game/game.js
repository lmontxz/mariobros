const mario = document.querySelector('.mario')
const cano = document.querySelector('.cano')

const pulo = () => {
    mario.classList.add('pulo');

    setTimeout(() => {
        mario.classList.remove('pulo');
    }, 500)
}

const loop = setInterval(() => {
    const canoPosition = cano.offsetLeft;

    if (canoPosition <= 120) {
        cano.style.animation = 'none';
        cano.style.left = '${canoPosition}px';
    }
}, 10);

document.addEventListener('keydown', pulo)
