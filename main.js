/**
 * @fileOverview Este archivo contiene ejemplos 
 * de funciones con for
 * @author Martín Becerra
 * @version 1.0
 */

/**
 * @description SumaArray suma los valores de un array
 * @param {Array} numeros array de números
 * @return {Number} 
 */
function SumaArray(numeros) {
    let suma = 0;
    for (let a of numeros) {
        suma = suma + a;
    }
    return suma
}
// let s1 = SumaArray([2, 3, 4, 5]);
// console.log(s1)
function SumaArray2(numeros) {
    let suma = 0;
    for (let pos in numeros) {
        suma = suma + numeros[pos];
    }
    return suma
}
// let s2 = SumaArray2([2, 3, 4, 5]);
// console.log(s2)
function SumaArray3(numeros) {
    let suma = 0;
    for (let i = 0; i < numeros.length; i++) {
        suma = suma + numeros[i];
    }

    return suma
}
// let s3 = SumaArray3([2, 3, 4, 5]);
// console.log(s3)

/**
 * @description BuscarAlumno busca un alumno en una lista
 * de alumno
 * @param {Array} listaAlumnos lista de alumnos
 * @param {Alumno} alumno alumno a buscar
 * @return {Boolean} 
 */
let alumnos = [
    { nombre: "Pe", apellidos: "Rb" },
    { nombre: "Peg", apellidos: "Rbs" },
    { nombre: "Pes", apellidos: "Rbd" }
];
let alumno = { nombre: "dasf", apellidos: "dasfs" };
function BuscarAlumno(listaAlumno, alumno) {
    let encontrado = false;
    for (let al of listaAlumno) {
        if (al.nombre == alumno.nombre && al.apellidos && alumno.apellidos) {
            encontrado = true;
        }
    }
    return encontrado
}
let BA = BuscarAlumno(alumnos,alumno);
console.log(BA)