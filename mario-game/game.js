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
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (canoPosition <= 120 && canoPosition > 0  && marioPosition < 80) {

        cano.style.animation = 'none';
        cano.style.left = `${canoPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`; 

        mario.src = './imagens/mariomorto.png'
        mario.style.style.marginLeft = '50px'
    }
}, 10);

document.addEventListener('keydown', pulo)
