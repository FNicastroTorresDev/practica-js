let container = document.getElementById('container')
let magicNum
let listaTarea = []

class Persona {
  constructor(dni, nombre, edad, anioDeNacimiento, sexo, peso, altura) {
    this.dni = dni,
    this.nombre = nombre,
    this.edad = edad,
    this.anioDeNacimiento = anioDeNacimiento
    this.sexo = sexo,
    this.peso = peso,
    this.altura = altura
  }

  mostrarGeneracion() {
    if (this.anioDeNacimiento >= 1930 && this.anioDeNacimiento <= 1948) {
      return `Es de la Silent Generation, caracterizados por su austeridad.`
    } else if (this.anioDeNacimiento >= 1949 && this.anioDeNacimiento <= 1968) {
      return `Es del Baby Boom, caracterizados por su ambición.`
    } else if (this.anioDeNacimiento >= 1969 && this.anioDeNacimiento <= 1980) {
      return `Es de la Generación X, caracterizados por su obsesión por el éxito.`
    } else if (this.anioDeNacimiento >= 1981 && this.anioDeNacimiento <= 1993) {
      return `Es de la Generación Y o millenials, caracterizados por su frustración.`
    } else {
      return `Es de la Generación Z, caracterizados por su irreverencia.`
    }
  }

  esMayorDeEdad() {
    if (this.edad >= 18) {
      return `Es mayor de edad.`
    } else {
      return `No es mayor de edad.`
    }
  } 

  mostrarDatos() {
    return `
      DNI: ${this.dni},
      Nombre: ${this.nombre},
      Edad: ${this.edad},
      Sexo: ${this.sexo},
      Peso: ${this.peso} kg,
      Altura: ${this.altura} m,
      Año de nacimiento: ${this.anioDeNacimiento}
    `
  }
}

class Tarea {
  constructor(descripcion, prioridad) {
    this.descripcion = descripcion,
    this.prioridad = prioridad
  }
}

function ejercicio1() { 
  container.setAttribute('class','container border border-primary rounded my-3 d-flex flex-column align-items-center p-3')

  container.innerHTML = `
    <h2>Número mágico 🔢✨</h2>
    <p>El juego consiste en adivinar el número secreto. Tal número será elegido al azar entre el 1 y el 100. ¡Suerte!</p>
    <button type="button" class="btn btn-success" onclick="setGame()">¡Comenzar!</button>
  `
}

function randomNum() {
  return Math.floor(Math.random() * (100 - 1) + 1)
}

function setGame() {
  magicNum = randomNum()
  
  container.innerHTML = `
    <h3 id="title">Adivina el número</h3>
    <form id="form" onsubmit="consultNumber(); return false">
      <div class="my-3">
        <label for="inputNum" class="form-label">💡 Inserte un número entre el 1 y el 100.</label>
        <div class="input-group">
          <input id="inputNum" type="number" required min="1" max="100" class="form-control">
          <button type="submit" class="btn btn-primary form-button">Enviar</button>
        </div>
      </div>
    </form>
    <div id="alert" class="alert alert-secondary text-center" role="alert"></div>
  `
  console.log(magicNum)
}

function consultNumber() {
  const number = document.getElementById('inputNum').value

  if (number == magicNum) {
    winGame()
  } else if (number < magicNum) {
    setAlert('lower')
  } else {
    setAlert('higher')
  }
}

function setAlert(result) {
  const alert = document.getElementById('alert')
  alert.innerHTML = ''

  switch (result) {
    case 'lower': 
      alert.innerHTML = '❌ El número es menor al mágico.'
      break
    case 'higher':
      alert.innerHTML = '❌ El número es mayor al mágico.'
      break
  }
}

function winGame() {
  document.getElementById('title').innerHTML = '🎉¡Ganaste!🎆'
  container.removeChild(document.getElementById('form'))
  const alert = document.getElementById('alert')
  alert.innerHTML = `Número mágico = ${magicNum}`
}

function ejercicio2() {
  container.setAttribute('class','container border border-primary rounded my-3 d-flex flex-column align-items-center p-3')

  container.innerHTML = `
    <h3 id="title">Cargar datos de persona:</h3>
    <form id="form" onsubmit="createPersona(); return false">
      <div class="my-2">
        <label for="dni" class="form-label">DNI:</label>
        <input id="dni" type="number" required min="1000000" class="form-control">
      </div>
      <div class="my-2">
        <label for="nombre" class="form-label">Nombre:</label>
        <input id="nombre" type="text" required class="form-control">
      </div>
      <div class="my-2">
        <label for="edad" class="form-label">Edad:</label>
        <input id="edad" type="number" required class="form-control">
      </div>
      <div class="my-2">
        <label for="anioNacimiento" class="form-label">Año de nacimiento:</label>
        <input id="anioNacimiento" type="number" required class="form-control" min="1900">
      </div>
      <div class="my-2">
        <label for="sexo" class="form-label">Sexo:</label>
        <select class="form-select" id="sexo">
          <option selected>Seleccione una opción</option>
          <option value="hombre">Hombre</option>
          <option value="mujer">Mujer</option>
          <option value="otro">Otro</option>
        </select>
      </div>
      <div class="my-2">
        <label for="peso" class="form-label">Peso:</label>
        <div class="input-group mb-3">
          <input type="number" class="form-control" id="peso" aria-describedby="basic-addon2" min="1">
          <span class="input-group-text" id="basic-addon2">kg</span>
        </div>
      </div>
      <div class="my-2">
        <label for="altura" class="form-label">Altura:</label>
        <div class="input-group mb-3">
          <input type="number" class="form-control" id="altura" aria-describedby="basic-addon2" step="0.01">
          <span class="input-group-text" id="basic-addon2">m</span>
        </div>
      </div>
      <button type="submit" class="btn btn-primary form-button">Enviar</button>
    </form>
  `
}

function createPersona() {
  const dni = document.getElementById('dni').value
  const nombre = document.getElementById('nombre').value
  const edad = document.getElementById('edad').value
  const anioNacimiento = document.getElementById('anioNacimiento').value
  const sexo = document.getElementById('sexo').value
  const peso = document.getElementById('peso').value
  const altura = document.getElementById('altura').value

  const persona = new Persona(dni, nombre, edad, anioNacimiento, sexo, peso, altura)
  window.sessionStorage.setItem('persona',JSON.stringify(persona))

  container.innerHTML = `
    <div class="alert alert-secondary text-center" role="alert">
      ✔¡Persona creada!
    </div>
    <div class="container d-flex justify-content-center">
      <button class="btn btn-primary form-button mx-1" onclick="showGeneration()">Generación</button>
      <button class="btn btn-primary form-button mx-1" onclick="legalAge()">¿Mayor de edad?</button>
    </div>
    <div id="result1" class="alert alert-secondary text-center my-2" role="alert">
    </div>
  `
}

function showGeneration() {
  const objeto = JSON.parse(sessionStorage.getItem('persona'))
  const persona = new Persona(objeto.dni, objeto.nombre, objeto.edad, objeto.anioDeNacimiento, objeto.sexo, objeto.peso, objeto.altura)
  const alert = document.getElementById('result1')
  alert.innerHTML = persona.mostrarGeneracion()
}

function legalAge() {
  const objeto = JSON.parse(sessionStorage.getItem('persona'))
  const persona = new Persona(objeto.dni, objeto.nombre, objeto.edad, objeto.anioDeNacimiento, objeto.sexo, objeto.peso, objeto.altura)
  const alert = document.getElementById('result1')
  alert.innerHTML = persona.esMayorDeEdad()
}

function ejercicio3() {
  container.setAttribute('class','container border border-primary rounded my-3 d-flex flex-column align-items-center p-3')

  container.innerHTML = `
    <h3>Lista de tareas</h3>
    <table class="table table-striped table-hover">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Tarea</th>
          <th scope="col">Prioridad</th>
          <th scope="col">Opciones</th>
        </tr>
      </thead>
      <tbody id="tableBody">
      </tbody>
    </table>
    <button class="btn btn-primary form-button mx-1" data-bs-toggle="modal" data-bs-target="#addTaskModal">Agregar tarea</button>
  `

  loadTable()
}

function loadTable() {
  let tableBody = document.getElementById('tableBody')
  tableBody.innerHTML = ''

  listaTarea.forEach((tarea, index) => {
    let taskRow = document.createElement('tr')
    let priorityColor

    switch (tarea.prioridad) {
      case 'Alta':
        priorityColor = 'text-danger'
        break
      case 'Media':
        priorityColor = 'text-warning'
        break
      case 'Baja':
        priorityColor = 'text-secondary'
        break
    }

    taskRow.scope = 'row'
    taskRow.innerHTML = `
      <td>${index+1}</td>
      <td>${tarea.descripcion}</td>
      <td class="fw-bold ${priorityColor}">${tarea.prioridad}</td>
      <td>
        <i id="${index}" class="bi bi-trash" title="Eliminar" onclick="deleteTask(this)"></i>
      </td>
    `

    tableBody.appendChild(taskRow)
  })
}

function addTask() {
  const descriptionTarea = document.getElementById('taskDescription').value
  const prioridadTarea = document.getElementById('taskPriority').value

  const nuevaTarea = new Tarea(descriptionTarea, prioridadTarea)

  listaTarea.push(nuevaTarea)

  loadTable()

  document.getElementById('taskDescription').value = ''
  document.getElementById('taskPriority').value = ''
}

function deleteTask(tarea) {
  listaTarea.splice(tarea.id,1)

  loadTable()
}


