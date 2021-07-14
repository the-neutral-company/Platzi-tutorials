var nombre = 'Sergio', edad = 32

// Estructura básica
function imprimirEdad() {
    console.log(`${nombre} tiene ${edad} años`)
}

imprimirEdad() // Así se ejecuta la función

// Parametros
function imprimirEdadConParametros(n, e) {
    console.log(`${n} tiene ${e} años`)
}

imprimirEdadConParametros('Sergio', 32)