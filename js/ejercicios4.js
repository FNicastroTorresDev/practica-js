// EJERCICIO 1

const myCar = {
  color: 'rojo',
  marca: 'fiat',
  modelo: 'palio',
  encendido: false,
  encender: () => {
    myCar.encendido = true
  },
  apagar: () => {
    myCar.encendido = false
  }
}

// EJERCICIO 2

const cuenta = {
  titular: 'Alex',
  saldo: 0,
  ingresar: monto => {
    cuenta.saldo += monto
  },
  extraer: monto => {
    cuenta.saldo -= monto
  },
  informar: () => `Saldo de ${cuenta.titular}: $${cuenta.saldo}`
}

// EJERCICIO 3

class Rectangulo {
  constructor(base, altura) {
    this.base = base,
    this.altura = altura
  }
  get mostrarBase() {
    return `Base: ${this.base}`
  }
  set cambiarBase(newBase) {
    this.base = newBase
  }
  get mostrarAltura() {
    return `Altura: ${this.altura}`
  }
  set cambiarAltura(newAltura) {
    this.altura = newAltura
  }
  get area() {
    return `El área es: ${this.base*this.altura}`
  }
  get perimetro() {
    return `El perímetro es: ${(this.base+this.altura)*2}`
  }
}

// EJERCICIO 4

class Producto {
  constructor(codigo, nombre, precio) {
    this.codigo = codigo,
    this.nombre = nombre,
    this.precio = precio
  }
  imprimirDatos() {
    return `Código: ${this.codigo}, Nombre del producto: ${this.nombre}, Precio: $${this.precio.toFixed(2)}`
  }
}

const producto1 = new Producto(01,'Cubo Rubik',1000)
const producto2 = new Producto(02,'El Eternauta',2500)
const producto3 = new Producto(03,'Teclado Redragon',6000)
const productos = [producto1, producto2, producto3]

// function mostrarProductos() {
//   productos.forEach(producto => {
//   console.log(producto.imprimirDatos)
// })
// }

// EJERCICIO 5

class Persona {
  constructor(nombre, edad, sexo, peso, altura, anioDeNacimiento) {
    this.nombre = nombre,
    this.edad = edad,
    this.sexo = sexo,
    this.peso = peso,
    this.altura = altura,
    this.anioDeNacimiento = anioDeNacimiento,
    this.dni = this.generarDNI()
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

  generarDNI() {
    return parseInt(Math.random() * (99999999-1000000) + 10000000)
  }
  
  mostrarDatos() {
    return `
      DNI: ${this.dni},
      Nombre: ${this.nombre},
      Edad: ${this.edad},
      Sexo: ${this.sexo} (H hombre, M mujer),
      Peso: ${this.peso} kg,
      Altura: ${this.altura} m,
      Año de nacimiento: ${this.anioDeNacimiento}
    `
  }
}

const persona1 = new Persona('Facundo',30,'H',94,1.83,1992)
const persona2 = new Persona('Melisa',29,'M',56,1.60,1993)
const persona3 = new Persona('Osvaldo',79,'H',65,1.7,1943)

// EJERCICIO 6

class Libro {
  constructor(isbn, titulo, autor, numPaginas) {
    this.isbn = isbn,
    this.titulo = titulo,
    this.autor = autor,
    this.numPaginas = numPaginas
  }

  get mostrarISBN() {
    return this.isbn
  }

  set cambiarISBN(nuevoISBN) {
    this.isbn = nuevoISBN
  }

  get mostrarTitulo() {
    return this.titulo
  }

  set cambiarTitulo(nuevoTitulo) {
    this.titulo = nuevoTitulo
  }

  get mostrarAutor() {
    return this.autor
  }

  set cambiarAutor(nuevoAutor) {
    this.autor = nuevoAutor
  }

  get mostrarNumPaginas() {
    return this.numPaginas
  }

  set cambiarNumPaginas(nuevoNumPaginas) {
    this.numPaginas = nuevoNumPaginas
  }

  mostrarLibro() {
    return `El libro ${this.titulo} con ISBN ${this.isbn} escrito por ${this.autor} tiene ${this.numPaginas} páginas.`
  }
}

const libro1 = new Libro(7854921,'Legionario','Facu Nicastro y Sergio Ledesma',80)
const libro2 = new Libro(7845129,'Alexia','Sergio Ledesma',50)

// EJERCICIO 7

class Contacto {
  constructor(nombre, telefono) {
    this.nombre = nombre,
    this.telefono = telefono
  }

  mostrarContacto() {
    return `Nombre: ${this.nombre} Teléfono: ${this.telefono}`
  }
}

const agenda = []

const aniadirContacto = (nombre, telefono) => {
  if (agenda.length === 10) {
    console.log('La agenda está llena. No se pudo agregar el contacto.')
    return
  } else {
    const nuevoContacto = new Contacto(nombre,telefono)
    if (!existeContacto(nuevoContacto)) {
      agenda.push(nuevoContacto)
    } else {
      agendaLlena()
    }
  }
}

const existeContacto = contacto => agenda.includes(contacto)

const listarContactos = () => {
  agenda.forEach(contacto => contacto.mostrarContacto())
}

const buscarContacto = nombre => {
  let indice = -1
  agenda.forEach(contacto => {
    if (contacto.nombre === nombre) {
      indice = agenda.indexOf(contacto)
    }
  })
  if (indice != -1) {
    console.log(`Teléfono: ${agenda[indice].telefono}`)
  } else {
    console.log(`El contacto no existe en la agenda.`)
  }
}

const eliminarContacto = contacto => {
  if (agenda.includes(contacto)) {
    console.log(`El contacto ${agenda.splice(agenda.indexOf(contacto),1)} fue eliminado.`)
  } else {
    console.log(`El contacto no existe en la agenda.`)
  }
}

const agendaLlena = () => {
  console.log('El contacto ya existe en la agenda.')
}

const huecosLibres = () => `Hay ${10 - agenda.length} espacios en la agenda.`