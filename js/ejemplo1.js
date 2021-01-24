//Usando declaración de clase
class Candidato {
  constructor(nombre,edad) {
    this.nombre = nombre
    this.edad = edad
  }
}

const victor = new Candidato('Victor', 30)
console.log(victor)

//Usando expresión de clase
const Candidato2 = class {
  constructor(nombre,edad) {
    this.nombre = nombre
    this.edad = edad
  }
}

const hugo = new Candidato2('Victor', 30)
console.log(hugo)