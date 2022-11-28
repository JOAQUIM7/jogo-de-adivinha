// variaveis
const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")
let radonNumber = Math.round(Math.random() * 10)
let xAttemprs = 1


// Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)
document.addEventListener('keydown', enterReset)

// função callback
function handleTryClick(event) {
    event.preventDefault() //não faça p padrão desse evento
    const inputNumber = document.querySelector("#inputNumber")
    if(Number(inputNumber.value) > 0 && Number(inputNumber.value) < 10){
        if(Number(inputNumber.value) == radonNumber) {
            toggleScreen()
            screen2.querySelector("h2").innerHTML = `Acertou em ${xAttemprs} tentativas`
        }
        inputNumber.value = ""
        xAttemprs++
    }else {
        alert("Digite um número entre 0 e 10")
    }
        
}

function handleResetClick() {
    toggleScreen()
    xAttemprs = 1
    radonNumber = Math.round(Math.random() * 10)
}

function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

function enterReset(e) {
    if(e.key == 'Enter' && screen1.classList.contains('hide')) {
        handleResetClick()
    }
}
