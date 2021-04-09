let attempts = 3
let secretWord = "Привет"
let btnCheck = document.querySelector(".check")
let btnStart = document.querySelector(".start")
let letters = []
let words = ['apple', 'banana', 'kiwi', 'lemon', 'mango', 'blueberry','raspberry', 'grapefruit']

document.querySelector("span").innerHTML = attempts
btnStart.disabled = true

btnCheck.addEventListener("click", check)
btnStart.addEventListener("click", restart)

let max = words.length
let min = 1
let word = words[getRandomNumber(max, min)]
function getRandomNumber(max, min){
    return Math.floor(Math.random()*(max)+min)
}

function check(){
    let user_letter = document.querySelector(".letter").value
    letters.push(user_letter)
    let out = ""

    for (let i = 0; i<word.length; i++){
        if (letters.indexOf(word[i]) != -1){
            out = out+word[i]
        }
        else{
            out = out + "*"
        }
    }

    if (word.indexOf(user_letter) == -1){
        attempts--
    }
    if (attempts < 1){
        btnCheck.disabled = true
        btnStart.disabled = false
    }

    document.querySelector("h3").innerHTML = out
    document.querySelector(".letter").value = ""
    document.querySelector("span").innerHTML = attempts
    if (out == word){
        btnCheck.disabled = true
        btnStart.disabled = false
        document.querySelector("h3").innerHTML = "Вы угадали!"
    }
}

function restart(){
    btnCheck.disabled = false
    btnStart.disabled = true
    attempts = 3
    letters = []
    document.querySelector("span").innerHTML = attempts
    document.querySelector("h3").innerHTML = "Здесь будет слово"
}
