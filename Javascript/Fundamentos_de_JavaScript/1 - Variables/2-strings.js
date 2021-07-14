var nombre = 'Sergio', apellido = 'Olivares'

var nombreEnMayusculas = nombre.toUpperCase() // Cambia todo a mayúsculas
var apellidoEnMinusculas = apellido.toLowerCase() // Cambia todo a minúsculas

var primerLetraDelNombre = nombre.charAt(0) // Obtiene la letra en la posición 0
var cantidadDeLetrasDelNombre = nombre.length

var nombreCompleto = nombre + ' ' + apellido
var nombreCompletoConInterpolación = `${nombre} ${apellido}` // Interpolación de texto

// substr() es similar a charAt()
// recibe 2 parámetros, la posición inicial desde donde se comienza a contar y 
// la posición hasta donde
// en este ejemplo desde la posición 1 hasta la 2
// de 'Sergio' tomará 'er'
var str = nombre.substr(1, 2)