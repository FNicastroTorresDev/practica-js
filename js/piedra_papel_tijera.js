const options = ['piedra','papel','tijera']
let resultado = document.getElementById('resultado')
let juego = document.getElementById('juego')

function playerChoice() {
  const choice = parseInt(prompt('Elije: Piedra(0), Papel(1), Tijera(2)'))

  if (isNaN(choice) || choice < 0 || choice > 2) {
    console.log('Opción errónea')
    return
  }

  console.log(options[choice])
}

function botChoice() {
  return Math.floor(Math.random()*3)
}

function imprChoice(choice,player) {
  if ( player == 0) {
    return `<div><h4>Tú</h4><img src="../images/${choice}.png" alt="Gesto de ${options[choice]}"></img></div>`
  } else {
    return `<div><h4>Bot</h4><img src="../images/${choice}.png" alt="Gesto de ${options[choice]}"></img></div>`
  }
}

function playGame(choice) {
  let bot = botChoice()
  juego.innerHTML = imprChoice(choice,0) + '<h3>VS</h3>' + imprChoice(bot,1)

  if (choice == bot) {
    resultado.innerHTML = 'Empate'
  } else if (choice == 0 && bot == 2) {
    resultado.innerHTML = '¡Ganaste!'
  } else if (choice == 2 && bot == 0) {
    resultado.innerHTML = 'Perdiste...'
  } else if (choice > bot) {
    resultado.innerHTML = '¡Ganaste!'
  } else {
    resultado.innerHTML = 'Perdiste...'
  }
}