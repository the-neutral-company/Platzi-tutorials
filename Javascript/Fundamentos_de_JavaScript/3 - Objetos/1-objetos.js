var sergio = {
    nombre: 'Sergio',
    apellido: 'Olivares',
    edad: 32
}

var natalia = {
    nombre: 'Natalia',
    apellido: 'Godoy',
    edad: 27
}

console.log(sergio.nombre)
console.log(natalia.nombre)

// Desestrucutación
var { nombre } = sergio
// nombre = 'Sergio'

function cumpleanios(persona){
    console.log(`edad de persona = ${persona.edad}`)
    persona.edad += 1 // esto modifica la edad de persona
    console.log(`edad de persona = ${persona.edad}`)
}

function cumpleaniosConNuevaPersona(persona) {
    // se retorna un nuevo objeto identico a persona y se modifica la edad
    return {
        ...persona,
        edad: persona.edad += 1
    }
}