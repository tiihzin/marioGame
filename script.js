const mario = document.querySelector('.mario')
const pipe = document.querySelector('.pipe')
const clouds = document.querySelector('.clouds')
const score = document.querySelector('.score')
const grama = document.querySelector('.grama')
const restart = document.querySelector('.restart')
const scorefinal = document.querySelector('.scorefinal')
var life = true;
var sc = 0;

function recarreagar(){
    window.location.reload(true);
}




function pontos() {
    sc = sc + 1
    score.innerHTML = sc < 10 ? 'Pontos: 0' + sc : 'Pontos: ' + sc;
}
       
function jump() {
    mario.classList.add('jump');
    mario.style.width= '12vh';
    mario.src= 'jump.webp',

    setTimeout(() => {
        mario.classList.remove('jump');
        mario.src= 'runnerMario.webp';
        mario.style.width= '7vh';
    }, 600)

    

    
}

setInterval( () => {
    if (life === true) {
    pontos()
    }
}, 100)



const loop = setInterval(() => {
    const pipePos = pipe.offsetLeft;
    
    const marioPos = +window.getComputedStyle(mario).bottom.replace('px', '');

    const cloudsPos = clouds.offsetLeft;

      
    if (pipePos <= 93 && pipePos > 10 && marioPos <= 160) {

        pipe.style.animation = 'none';
        pipe.style.left = pipePos + 'px';

        mario.style.animation = 'overani 2s ease-out 1s';
        mario.style.bottom = marioPos + 'px';
        mario.src = 'gameOver.png';
        mario.style.width = '8vh';

        clouds.style.animation = 'none';
        clouds.style.left = cloudsPos + 'px';

        grama.style.animation = 'none';

        score.style.display = 'none';

        restart.style.display = 'flex';

        scorefinal.innerHTML = sc < 10 ? 'Pontos: 0' + sc : 'Pontos: ' + sc;

        life = false;
        
        
                   
    }

    
    
})

