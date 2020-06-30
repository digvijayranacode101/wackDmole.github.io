const square = document.querySelectorAll('.square')
const mole = document.querySelectorAll('.mole')
const timeLeft = document.querySelector('#time-left')
let score = document.querySelector('#score')

let result = 0
let currentTime = timeLeft.textContent

function randomSq(){
    square.forEach(className => {
        className.classList.remove('mole')    
    })
    let randomPosi= square[Math.floor(Math.random()*9)]
    randomPosi.classList.add('mole')
    hitPosi =(randomPosi.id)
}

square.forEach(id => {
    id.addEventListener('mouseup', () =>{
        if(id.id===hitPosi){
            result=result+1
            score.textContent = result
        }
    })
})

function moveMole(){
    let timerId = null
    timerId = setInterval(randomSq,1000)
    
        
    
}
moveMole()

function countDown(){
    console.log(timerId)
    currentTime--
    timeLeft.textContent=currentTime
    if (currentTime === 0){
        clearInterval(timerId)
        alert('GAME OVER, Your score ' + result)
    }
}

let timerId= setInterval(countDown, 1000)