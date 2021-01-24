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

//Heredando clase
class Empleado extends Candidato {
  constructor(nombre, edad, puesto, antiguedad) {
    super(nombre, edad)
    this.puesto = puesto
    this.antiguedad = antiguedad
  }

  mostrarInformacion() {
    return `Empleado: ${this.nombre}, tiene una edad de ${this.edad} años, un puesto de ${this.puesto} y una antigüedad de ${this.antiguedad} años`
  }

   //Reescribiendo una propiedad estatica
   static bienvenida() {
    return `Bienvenido a no olvides checar tu hora de entrada`
  }
}

const victor = new Candidato('Victor', 30)
const luis = new Empleado('Luis', 33, 'Manager', 4)
console.log(luis)
console.log(luis.mostrarInformacion())

console.log(Candidato.bienvenida())
console.log(Empleado.bienvenida())