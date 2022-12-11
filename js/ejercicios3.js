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

function ejercicio4() {
  let num = prompt('Ingrese un número')
  descripcion.innerHTML = 'El número ingresado es:'
  resultado.innerHTML = parOImpar(num)
}

const parOImpar = num => {
  if (num % 2 == 0) {
    return 'Par'
  } else {
    return 'Impar'
  }
}

function ejercicio5() {
  let frase = prompt('Ingrese una frase')
  descripcion.innerHTML = `La frase "${frase}" está formada por:`
  resultado.innerHTML = minusOMayus(frase)
}

const minusOMayus = frase => {
  let contador = 0
  for (let i = 0; i < frase.length; i++) {
    if (mayus(frase.charAt(i))) {
      contador++
    }
  }
  if (contador == frase.length) {
    return 'Solo mayúsculas'
  } else if (contador == 0) {
    return 'Solo minúsculas'
  } else {
    return 'Mayúsculas y minúsculas'
  }
}

const mayus = letra => letra === letra.toUpperCase()

function ejercicio6() {
  const lados = prompt('Ingrese los lados del rectángulo separados por una x (ejemplo: "2x4"):')
  descripcion.innerHTML = `El perímetro del rectángulo ${lados} es:`
  resultado.innerHTML = perimetro(lados)
}

const perimetro = lados => 2*(parseInt(lados.substring(0,lados.indexOf('x')))+parseInt(lados.substring(lados.indexOf('x')+1)))

function ejercicio7() {
  const num = parseInt(prompt('Ingrese un número'))
  descripcion.innerHTML = `Tabla del ${num}:`
  piramide.innerHTML = `<ul>${tabla(num)}</ul>`
}

const tabla = num => {
  let lista = ''
  for (let i = 1; i <= 10; i++) {
    lista += fila(num,i)
  }
  return lista
}

const fila = (num,i) => `<li>${i} * ${num} = ${i*num}</li>`