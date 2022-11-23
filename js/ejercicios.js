/*
ejercicio 1
document.write('Hello World')
*/

/*
ejercicio 2
const user = prompt('Ingrese nombre de usuario')
document.write('<h1>Hola '+user+'</h1>')
*/

/*
ejercicio 3
const num = parseInt(prompt('Ingrese un número'))
const num1 = parseInt(prompt('Ingrese otro número'))
document.write('<h1>La suma es ',num+num1,'</h1>')
*/


/*
ejercicio 4

const num = parseInt(prompt('Ingrese un número'))

if ((num % 2)==0) {
  document.write('<h1>Es un número par</h1>')
} else {
  document.write('<h1>Es un número impar</h1>')
}
*/

/* 

Ejercicio 6 

const num = parseInt(prompt('Ingrese un número'))
const num1 = parseInt(prompt('Ingrese otro número'))

if (num >= num1 ) {
  document.write('<h1>El primer número es mayor o igual al segundo.</h1>')
} else {
  document.write('<h1>El segundo número es mayor.</h1>')
}
*/

/*
Ejercicio 7*/

/*
 A partir de aquí me pareció buena idea empezar a practicar interacción con html para mostrar los resultados en página. Googlié un poco y encontré las funciones getElementById() e innerHTML. 
 Edit 1: Me di cuenta que descripcion y resultado los puedo crear como variables globales. Lo apliqué en ejercicios2.js 
*/

function ejercicio7() {
  let resultado = document.getElementById('resultado')
  let descripcion = document.getElementById('descripcion')
  const num = parseInt(prompt('Ingrese un número'))
  const num1 = parseInt(prompt('Ingrese otro número'))
  const num2 = parseInt(prompt('Ingrese otro número'))

  descripcion.innerHTML = "El mayor de los tres números ingresados es:"

  if ((num > num1) && num > num2) {
    return resultado.innerHTML = num
  } else if (num1 > num2) {
    return resultado.innerHTML = num1
  } else {
    return resultado.innerHTML = num2
  }
}

function ejercicio8() {
  let descripcion = document.getElementById('descripcion')
  let resultado = document.getElementById('resultado')
  const num = parseInt(prompt('Ingrese un número'))

  descripcion.innerHTML = 'El número que ingresó es:'

  if ((num % 2)==0) {
    return resultado.innerHTML = 'Par'
  } else {
    return resultado.innerHTML = 'Impar'
  }
}

function ejercicio9() {
  let descripcion = document.getElementById('descripcion')
  let resultado = document.getElementById('resultado')
  let frase = prompt('Ingrese una frase:').toLowerCase()
  let fraseNueva = '' 

  descripcion.innerHTML = `La frase \"${frase}\" sin consonantes queda así:`

  for (let i=0; i<=frase.length ;i++) {
    if ((frase.charAt(i)=='a')||(frase.charAt(i)=='e')||(frase.charAt(i)=='i')||(frase.charAt(i)=='o')||(frase.charAt(i)=='u')||(frase.charAt(i)==' ')) {
      fraseNueva += frase.charAt(i)
    }
  }
  return resultado.innerHTML = fraseNueva
}

// Este ejercicio lo resolvimos en clase. Se utiliza forof para mejorar eficiencia.
function ejercicio9a() {
  let descripcion = document.getElementById('descripcion')
  let resultado = document.getElementById('resultado')
  const vocales = ['a','e','i','o','u']
  const frase = prompt('Ingrese una frase:').toLowerCase()
  let fraseNueva = ''

  for (const letra of frase) {
    for (const vocal of vocales) {
      if (letra === vocal || letra === ' ') {
        fraseNueva += letra
      }
    }
  }

  descripcion.innerHTML = `La frase \"${frase}\" sin consonantes queda así:`
  resultado.innerHTML = fraseNueva
}

function ejercicio10() {
  let descripcion = document.getElementById('descripcion')
  let resultado = document.getElementById('resultado')
  const num = parseInt(prompt('Ingrese un número:'))

  descripcion.innerHTML = 'El número ingresado es divisible por:'

  if (num%2==0) {
    return resultado.innerHTML = '2'
  } else if (num%3==0) {
    return resultado.innerHTML = '3'
  } else if (num%5==0) {
    return resultado.innerHTML = '5'
  } else if (num%7==0) {
    return resultado.innerHTML = '7'
  } else {
    return resultado.innerHTML = 'Ninguno de los números programados.'
  }
}

function ejercicio11() {
  let descripcion = document.getElementById('descripcion')
  let resultado = document.getElementById('resultado')
  const num = parseInt(prompt('Ingrese un número:'))

  descripcion.innerHTML = 'El número ingresado es divisible por:'
  let divisores = ''

  for (i=1; i<=7; i++) {
    if ((i==2)||(i==3)||(i==5)||(i==7)) {
      if (num%i==0) {
        divisores += i+' '
      }
    }
  }
  return resultado.innerHTML = divisores
}

