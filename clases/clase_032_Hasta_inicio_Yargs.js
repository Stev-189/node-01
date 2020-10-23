//requires
// tipos
// const fs = require('fs');// propia de node
// const fs = require('express');// paquetes que no son nativos de node
// const fs = require('./fs');// archivos propios que no sotros creamos
//const fs = require('fs');
//F1 si usarmaos la funcion tendria que ser llmaada //multiplicar.crearArchivo
// const multiplicar = require('./Multiplicar/multiplicar.js')
//F2 des tea forma solo llamamos a la funcion //crearArchivo
const { crearArchivo } = require('./Multiplicar/multiplicar.js') //estamos requiriendo la funcion multiplicador que creamos 
    // let base = '2'; // declaramos la bases  atrabajar
    // let data = ''
    // for (let i = 1; i <= 10; i++) {
    //     let res = base * i
    //     data += `${res}\n`; // es para ahcer un salto de lñinea al momento que se creee el archivo
    // }

// recive 2 parametros
//1 nombre o ruta dle archivo a guardar 
//2 Texto al interior del archivo
//3 una callback para confirma la creacion de este

//              1                          2        3
// fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//     if (err) throw err;
//     console.log(`El archivo tabla-${base} ha sido Creado!`);
// })

// en resumen//
/* const fs = require('fs');
let base = 5;
let data = ''
for (let i = 1; i <= 10; i++) {
    let res = base * i
    data += `${res}\n`; 
}
fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw err;
    console.log(`El archivo tabla-${base} ha sido Creado!`);
}) */
// en resumen//
//console.log(module)

// reciviendo parametros con la funcion
// formato que recive --base=6
let argv = process.argv;
let parametro = argv[2]; // es le tercer elemento ya que es un array
let base = parametro.split('=')[1] // separamso el string y tomamos le segundo elemento '5'
console.log(base);


/////Start
/* crearArchivo(base) //ejecutamos funcion 
    .then(archivo => console.log(`El archivo tabla-${archivo} ha sido Creado!`))
    .catch(e => console.log(e)); */

// console.log(process);// es un elemento com module// (en js Front es parecido al windows pero con otras propiedades)
// console.log(process.argv); // es una array con path
// al escribir en ternimalo al ejcucionn de app y agregarmos cualquiere cosa sera agregado al process.argv
// ejemplo node app agregamos //esto agregarra agregamos