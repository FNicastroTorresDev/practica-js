// Variables globales que utlizan todas las funciones:
let resultado = document.getElementById('resultado')
let descripcion = document.getElementById('descripcion')
let piramide = document.getElementById('piramide')

function ejercicio1() {
  let num 

  do {
    num = parseInt(prompt('Ingrese una edad mayor a 18:'))
  } while (num<=18)

  descripcion.innerHTML = "¿Puede tener carnet para manejar?"
  resultado.innerHTML = "Sí"
}

function ejercicio2() {
  let valoracion
  let nota

  do {
    nota = parseInt(prompt('Ingrese una nota entre 0 y 10:'))
  } while (nota<0 || nota>10)

  descripcion.innerHTML = "Valoración de la nota:"

  if (nota>=0 && nota<=2) {
    valoracion = "Muy deficiente"
  } else if (nota == 3 || nota == 4) {
    valoracion = "Insuficiente"
  } else if (nota == 5 || nota ==6) {
    valoracion = "Suficiente"
  } else if (nota == 7) {
    valoracion = "Bien"
  } else if (nota == 8 || nota == 9) {
    valoracion = "Notable"
  } else if (nota == 10) {
    valoracion = "Sobresaliente"
  }

  resultado.innerHTML = valoracion
}

function ejercicio3() {
  let cadenas = []
  let i = 0
  let concatenados = ""

  do {
    cadenas[i] = prompt('Ingrese una cadena:')
    i++
  } while (confirm("Aceptar para ingresar otra cadena. Cancelar para detener ingresos."));
  
  descripcion.innerHTML = "Cadenas ingresadas:"

  for (const cadena of cadenas) {
    concatenados += cadena+" - "
  }

  resultado.innerHTML = concatenados
}

function ejercicio4() {
  let sumatoria = 0
  let num

  do {
    num = prompt('Ingrese un número:')
    while (isNaN(num)) {
      alert('¡Dato erróneo! Debe ingresar un número.')
      num = prompt('Ingrese un número:')
    }
    num = parseInt(num)
    sumatoria += num
  } while (confirm("Continuar -> Aceptar | Terminar -> Cancelar")==true);

  descripcion.innerHTML = "La sumatoria de los números ingresados es:"
  resultado.innerHTML = sumatoria
}

function ejercicio5() {
  const letras = ['T','R','W','A','G','M','Y','F','P','D','X','B','N','J','Z','S','Q','V','H','L','C','K','E']
  let dni

  do {
    dni = prompt('Ingrese un DNI:')
    if ((dni<0 || dni>99999999)||isNaN(dni)) {
      alert('¡Error! Ingresó un dato incorrecto.')
    }
  } while ((dni<0 || dni>99999999)||isNaN(dni))

  num = parseInt(dni)
  descripcion.innerHTML = "La letra del DNI es:"
  resultado.innerHTML = letras[dni%23]
}

function ejercicio6() {
  piramide.innerHTML = ''
  let num
  let fila

  do {
    num = prompt("Ingrese un número (1-30)")
  } while ((num<1 || num>30)||isNaN(num))

  num = parseInt(num)
  for (let i = 1; i <= num; i++) {
    fila = ''
    for (let j = 1; j <= i; j++) {
      fila += i+' '
    }
    piramide.innerHTML += `<h4>${fila}</h4>`
  }
}

function ejercicio7() {
  piramide.innerHTML = ''
  let num
  let fila

  do {
    num = prompt("Ingrese un número menor a 50:")
  } while ((num<1 || num>50)||isNaN(num))

  num = parseInt(num)
  for (let i = num; i >= 1; i--) {
    fila = ''
    for (let j = i; j >= 1; j--) {
      fila += i+' '
    }
    piramide.innerHTML += `<h4>${fila}</h4>`
  }
}

function ejercicio8() {
  piramide.innerHTML = ''
  let num
  let fila

  do {
    num = prompt("Ingrese un número (1-50)")
  } while ((num<1 || num>50)||isNaN(num))

  num = parseInt(num)
  for (let i = 1; i <= num; i++) {
    fila = ''
    for (let j = 1; j <= i; j++) {
      fila += j+' '
    }
    piramide.innerHTML += `<h4>${fila}</h4>`
  }
}

function ejercicio9() {
  piramide.innerHTML = ''

  for (let i = 1; i <=500; i++){
    if (i%4 == 0) {
      piramide.innerHTML += `<h4>${i} (Múltiplo de 4)</h4>`
      if (i%5 == 0) {
        piramide.innerHTML += `<h4>---------------------------</h4>`
      }
    } else if (i%5 == 0) {
      piramide.innerHTML += `<h4>${i}</h4>`
      piramide.innerHTML += `<h4>---------------------------</h4>`
    } else if (i%9 == 0) {
      piramide.innerHTML += `<h4>${i} (Múltiplo de 9)</h4>`
    } else {
      piramide.innerHTML += `<h4>${i}</h4>`
    }
  }
}

function ejercicio10() {
  let fila = parseInt(prompt('Ingrese número de filas:'))
  let columna = parseInt(prompt('Ingrese número de columnas:'))
  let k = 1
  let celdas
  let filas = ''

  for (let i = 1; i <= fila; i++) {
    celdas = ''
    for (let j = 1; j <= columna; j++) {
      celdas += `<td>${k}</td>`
      k++
    }
    filas += `<tr>${celdas}</tr>`
  }

  piramide.innerHTML = `<table>${filas}</table>`
}

function ejercicio11() {
  const nombre = ['','','']
  const edad = [0,0,0]

  for (i = 0; i <= 2; i++) {
    nombre[i] = prompt(`Ingrese un nombre:`)
    edad[i] = parseInt(prompt(`Ingrese edad para ${nombre[i]}:`))
  }

  descripcion.innerHTML = 'El mayor es:'

  switch (Math.max(edad[0],edad[1],edad[2])) {
    case edad[0]:
      resultado.innerHTML = nombre[0]
      break
    case edad[1]:
      resultado.innerHTML = nombre[1]
      break
    case edad[2]:
      resultado.innerHTML = nombre[2]
      break
  }
}

function ejercicio12() {
  descripcion.innerHTML = 'Número aleatorio (1-99):'
  resultado.innerHTML = Math.round(Math.random()*100)
}

function ejercicio13() {
  const frase = prompt('Ingrese una frase:')
  descripcion.innerHTML = "La frase en mayúsculas quedaría:"
  resultado.innerHTML = frase.toUpperCase()
}

function ejercicio14() {
  const frase = prompt('Ingrese una frase:')
  let fraseNueva = ''

  for (let i = 0; i < frase.length; i++) {
    if (i == frase.length-1) {
      fraseNueva += frase[i]
    } else {
      fraseNueva += frase[i]+'-'
    }
  }

  resultado.innerHTML = fraseNueva
}

function ejercicio15() {
  const frase = prompt('Ingrese una frase:').toLowerCase()
  const vocales = ['a','e','i','o','u']
  let contador = 0

  for (const letra of frase) {
    for (const vocal of vocales) {
      if (letra === vocal) {
        contador++
      }
    }
  }

  descripcion.innerHTML = `La frase "${frase}" contiene ${contador} vocales.`
}

function ejercicio16() {
  const frase = prompt('Ingrese una frase:')
  let esarf = ''
  
  for (let i = frase.length-1; i >= 0 ; i--) {
    esarf += frase[i]
  }

  descripcion.innerHTML = `La frase "${frase}" al revés queda así:`
  resultado.innerHTML = esarf
}

function ejercicio17() {
  const frase = prompt('Ingrese una frase:')
  const vocales = ['a','e','i','o','u']
  let bandera = false
  let posicion = 0
  let i = 0

  do {
    for (const vocal of vocales) {
      if (frase[i] === vocal) {
        posicion = i+1
        bandera = true
      }
    }
    i++
  } while (!bandera && i<frase.length);

  if (posicion == 0) {
    descripcion.innerHTML = `La frase "${frase}" no tiene vocales.`
    resultado.innerHTML = 'ERROR'
  } else {
    descripcion.innerHTML = `La primera vocal de la frase "${frase}" está en la posición:`
    resultado.innerHTML = posicion
  }
}