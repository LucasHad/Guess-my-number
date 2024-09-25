/*document.querySelector('.message').textContent = 'Correct number!';

document.querySelector('.number').textContent = 13

document.querySelector('.score').textContent = 50

document.querySelector('.guess').value = 5 */


let secretNumber = Math.trunc(Math.random()*9999) + 1
let score = 20
let highscore = 0
console.log(secretNumber)
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess)

    if(!guess){
        document.querySelector('.message').textContent = 'Sem número❌'
    }else if(guess === secretNumber){
        document.querySelector('.message').textContent = 'Número correto👏'
        document.querySelector('body').style.backgroundColor = '#60b347'
        document.querySelector('.number').style.width = '30rem'
        document.querySelector('.number').textContent = secretNumber

        if(score > highscore){
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }

    }else if(guess > secretNumber && score > 0){
        document.querySelector('.message').textContent = 'Alto demais!'
        score--;
        document.querySelector('.score').textContent = score;
    }else if(guess < secretNumber && score > 0){
        document.querySelector('.message').textContent = 'baixo demais!'
        score--
        document.querySelector('.score').textContent = score
    }else if(score === 0){
        document.querySelector('.message').textContent = 'Fim de jogo!'
        document.querySelector('body').style.backgroundColor = '#ff0000'
    }
})



document.querySelector('.again').addEventListener('click', function(){
    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
    document.querySelector('.number').textContent = '?'
    score = 20
    secretNumber = Math.trunc(Math.random()*20) + 1
    console.log(secretNumber)
    document.querySelector('.score').textContent = score
    document.querySelector('.guess').value = ''
    document.querySelector('.message').textContent = 'Comece a chutar'
})