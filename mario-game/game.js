const mario = document.querySelector('.mario')
const cano = document.querySelector('.cano')
const score = document.querySelector('.score')
let count = 0;

const pulo = () => {
    mario.classList.add('pulo');

    setTimeout(() => {
        mario.classList.remove('pulo');
    }, 500)
}

const loop = setInterval(() => {
    const canoPosition = cano.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    if (canoPosition <= 120 && canoPosition > 0  && marioPosition < 200) {

        cano.style.animation = 'none';
        cano.style.left = `${canoPosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`; 

        mario.src = './imagens/mariomorto.png'
        mario.style.marginRight = '100px'

        clearInterval(loop);
    }
}, 10);

setInterval(() => {
    let marioBottom = parseInt(
        window.getComputedStyle(mario).getPropertyValue("bottom")
    );
    let canoLeft = parseInt(
        window.getComputedStyle(cano).getPropertyValue("left")
    );

    if (canoLeft > 40 && canoLeft < 120 && marioBottom <= 50){
        ('GameOver! Seu Score foi: ${count}');
        count = 0;
    }

    count++;
    score.innerHTML = `SCORE: ${count}`;
}, 100);

document.addEventListener('keydown', pulo)
