var nombre = 'Sergio'

function imprimirNombreEnMayusculas() {
    nombre = nombre.toUpperCase()
    console.log(nombre)
}

imprimirNombreEnMayusculas()

/* Esto tiene un efecto colateral en la variable 'nombre'
 * ahora se modificó y queda en mayusculas 'SERGIO'
*/

/*
 * en este ejemplo el alcance o 'scope' de la variable n es solo dentro de la funcion
 * de esta forma se le puede pasar 'nombre como parámetro, pero esto no modifica a 'nombre'
*/
function imprimirNombreEnMayusculasConParametro(n) {
    n = n.toLowerCase()
    console.log(n)
}


imprimirNombreEnMayusculasConParametro(nombre)
