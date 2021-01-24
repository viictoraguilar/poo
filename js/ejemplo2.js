//Usando declaración de clase
class Candidato {
  constructor(nombre,edad) {
    this.nombre = nombre
    this.edad = edad
  }

  mostrarInformacion() {
    return `Candidato: ${this.nombre}, tiene una edad de ${this.edad} años`
  }

  //Creando una propiedad estatica
  static bienvenida() {
    return `Bienvenido a la entrevista`
  }
}

const victor = new Candidato('Victor', 30)
console.log(victor.mostrarInformacion())
console.log(victor)

console.log(Candidato.bienvenida())

//Usando expresión de clase
const Candidato2 = class {
  constructor(nombre,edad) {
    this.nombre = nombre
    this.edad = edad
  }

  mostrarInformacion() {
    return `Candidato: ${this.nombre}, tiene una edad de ${this.edad} años`
  }
}

const hugo = new Candidato2('Hugo', 29)
console.log(hugo.mostrarInformacion())
console.log(hugo)