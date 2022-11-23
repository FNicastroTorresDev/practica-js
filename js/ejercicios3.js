// Variables globales que utilizan todas las funciones.
let resultado = document.getElementById('resultado')
let descripcion = document.getElementById('descripcion')
let piramide = document.getElementById('piramide')

function ejercicio1() {
  let lista = ''
  let i = 0
  const meses = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre']
  piramide.innerHTML = ''

  descripcion.innerHTML = 'Lista de meses:'
  
  for (const mes of meses) {
    lista += `<li>${mes}</li>`
  }
  piramide.innerHTML += `<ol>${lista}</ol>`
}

function ejercicio2() {
  const ciudades = []
  let lista = ''

  do {
    ciudades.push(prompt('Ingrese una ciudad:'))
  } while (confirm('Continuar(Aceptar) | Terminar(Cancelar)') == true)

  descripcion.innerHTML = `Longitud del arreglo: ${ciudades.length}`
  piramide.innerHTML = `<ul><li>${ciudades[0]}</li><li>${ciudades[2]}</li><li>${ciudades[ciudades.length-1]}</li></ul>`

  ciudades.push('París')

  piramide.innerHTML += `<ul><li>${ciudades[1]}</li></ul>`

  ciudades[1] = 'Barcelona'

  for (const ciudad of ciudades) {
    lista += `<li>${ciudad}</li>`
  }

  piramide.innerHTML += `<ol>${lista}</ol>`
}

function dados() {
  let suma = Math.round(Math.random()*6)+Math.round(Math.random()*6)
  return suma
}

function ejercicio3() {
  const sumas = []
  let items = ''

  for (let i = 0; i < 50; i++){
    sumas[i] = dados()
  }

  for (const suma of sumas) {
    items += `<li>${suma}</li>`
  }

  descripcion.innerHTML = 'Suma de 50 lanzamientos de 2 dados:'
  piramide.innerHTML = `<ol>${items}</ol>`
}

// VISTO EN CLASE 

/*
const date = new Date('11/14/2022').getDay()



function isWeekend(day) {
  if (day === 0 || day === 6 ) {
    return 'Is Weekend! Lets go for a beer!'
  } else {
    return 'Not Weekend. Go to work!'
  }
}

console.log(isWeekend(date))



function isWeekend(day) {
  return (day === 0 || day === 6)
}

function printWeekend(isWeekend) {
  if (isWeekend) {
    console.log('Is Weekend! Lets go for a beer!')
  } else {
    console.log('Not Weekend. Go to work!')
  }
}

printWeekend(isWeekend(date))

*/

