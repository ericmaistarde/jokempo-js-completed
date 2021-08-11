const $buttonStart = document.querySelector(".button-start")
const $buttonReset = document.querySelector(".button-reset")

const $buttonStone1 = document.querySelector(".button-stone-1")
const $buttonPaper1 = document.querySelector(".button-paper-1")
const $buttonScissors1 = document.querySelector(".button-scissors-1")

const $buttonStone2 = document.querySelector(".button-stone-2")
const $buttonPaper2 = document.querySelector(".button-paper-2")
const $buttonScissors2 = document.querySelector(".button-scissors-2")

const $winnerName = document.querySelector('.winner-box')

const $field1 = document.querySelector(".field-1")
const $field2 = document.querySelector(".field-2")

const $score1 = document.querySelector(".score-1")
const $score2 = document.querySelector(".score-2")

const $buttondeafult1 = document.querySelector(".button-deafult--name--1")
const $buttondeafult2 = document.querySelector(".button-deafult--name--2")
// const $playerName1 = document.querySelector('#player-name-1')
// const $playerName2 = document.querySelector('#player-name-2')

let player1Move = '' //a let "player1" se refere aos valores do jogador 1,a dois na mesma pegada disso,ovibiamenti 
let player2Move = ''

let winner = "" //no inicio começa vazio,por isso esta só esse sinal '' logo depois entra algum valor que será o vencedor de dada rodadada
let started = false //começa como "false" pois se trata de um jogo que ainda não começou,então comoça como false e logo depois de apertar o botão de 'iniciar' voce muda esse valor de false para true 

let pointsP1 = 0 // referente aos pontos dos jogadores 1 e 2
let pointsP2 = 0

// console.log(valuePlayer1,valuePlayer2)


//console.log($ValuePlayer1) //como fazer pro imput funcionar?

// // $buttondeafult1.addEventListener('click', function (e) {
//     e.preventDefault()

//     const $namePlayer1 = document.querySelector(".name-player-1")


//     const valuePlayer1 = $namePlayer1

//     $namePlayer1 = valuePlayer1.innerHTM + " ganhou"

// })

// $buttondeafult2.addEventListener('click', function (e) {
//     e.preventDefault()
//     const $namePlayer2 = document.querySelector(".name-player-1")

//     const valuePlayer2 = $namePlayer2
// })

function verifyWinner() {
    if (player1Move == player2Move) {
        winner = 0
        setTimeout(function () {
            printNameWinner(0)
            ResetFieldP1()
            ResetFieldP2()
            resetVarieblesfields()
        }, 800)
        //  resetVarieblesfields()
        // if ($player2 && $player2 == true) {
        //     ResetFieldP2()
        //     ResetFieldP1()
        //  }
    } else if (player1Move == "stone" && player2Move == "scissors" || player1Move == "scissors" && player2Move == "paper" || player1Move == "paper" && player2Move == "stone") {
        setTimeout(function () {
            winner = 1
            printNameWinner(1)
            addPointsP1()
            ResetFieldP1()
            ResetFieldP2()
            resetVarieblesfields()
        }, 800)
        //  resetVarieblesfields()
        //  if ($player2 == true) {
        //     ResetFieldP2()
        //ResetFieldP1()
        //  }
    } else if (player1Move == "scissors" && player2Move == "stone" || player1Move == "paper" && player2Move == "scissors" || player1Move == "stone" && player2Move == "paper") {
        setTimeout(function () {
            winner = 2
            printNameWinner(2)
            addPointsP2()
            ResetFieldP1()
            ResetFieldP2()
            resetVarieblesfields()
        }, 800)
    }
}

function ResetFieldP1() {
    $field1.innerHTML = ''
}

function ResetFieldP2() {
    $field2.innerHTML = ''
}

function ResetScoreP1() {
    pointsP1 = 0
    $score1.innerHTML = "00"
}

function ResetScoreP2() {
    pointsP2 = 0
    $score2.innerHTML = "00"
}

function resetVarieblesfields() {
    player1Move = ''
    player2Move = ''
}

function resetWinner() {
    $winnerName.innerHTML = "comece a jogar"
}

function addPointsP1() {
    $score1.innerHTML = pointsP1 += 1
}

function addPointsP2() {
    $score2.innerHTML = pointsP2 += 1
}

function printNameWinner() {
    if (winner == 1) {
        $winnerName.innerHTML = "player 1 ganhou" //era pra vir aqui o valor do input mas nao sei o pq nao vem,coloquei o $namePlayer1 = valuePlayer1.innerHTM e ainda assim nao vem 
    } else if (winner == 2) {
        $winnerName.innerHTML = "player 2 ganhou"
    } else {
        if (winner != 1 && 2) {
            $winnerName.innerHTML = "empatou"
        }
    }
}

$buttonStart.addEventListener('click', () => {
    started = true
})

$buttonReset.addEventListener("click", function () {
    ResetFieldP1()
    ResetFieldP2()
    ResetScoreP1()
    ResetScoreP2()
    resetWinner()
    resetVarieblesfields()
})

$buttonStone1.addEventListener("click", function () {//esssas funções são dos botoes,ou seja essas são as que 'jogam' as imagens dentro do field
    if (started == false) return
    player1Move = "stone"
    $field1.innerHTML = '<img src="../src/images/pedra.png" alt="pedra">'
    verifyWinner()
})

$buttonPaper1.addEventListener("click", function () {
    if (started == false) return
    player1Move = "paper"
    $field1.innerHTML = '<img src="../src/images/papel.png" alt="papel">'
    verifyWinner()
})

$buttonScissors1.addEventListener("click", function () {
    if (started == false) return
    player1Move = "scissors"
    $field1.innerHTML = '<img src="../src/images/tesoura.png" alt="tesoura">'
    verifyWinner()
})

$buttonStone2.addEventListener("click", function () {
    if (started == false) return
    player2Move = "stone"
    $field2.innerHTML = '<img src="../src/images/pedra.png" alt="pedra">'
    verifyWinner()
})

$buttonPaper2.addEventListener("click", function () {
    if (started == false) return
    player2Move = "paper"
    $field2.innerHTML = '<img src="../src/images/papel.png" alt="papel">'
    verifyWinner()
})

$buttonScissors2.addEventListener("click", function () {
    if (started == false) return
    player2Move = "scissors"
    $field2.innerHTML = '<img src="../src/images/tesoura.png" alt="tesoura">'
    verifyWinner()
})
