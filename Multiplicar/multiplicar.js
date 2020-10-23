const fs = require('fs'); //fs la rquerimos para poder trabajar con documentos 
const colors = require('colors');
// F2 de como exportar la funcion
// module.exports.crearArchivo = (base) => {
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if (!Number(base)) {
            reject(`El valor ${base} introducido no es un numero`.red);
            return;
        } else if (!Number(limite)) {
            reject(`El valor limete ${limite} introducido no es un numero`.red);
            return;
        } else { // comprobason d enumero o return error

            let data = '' // template que lamasenara los resultado de multiplicacion
            for (let i = 1; i <= limite; i++) {
                let res = base * i
                data += `${base} * ${i} = ${res}\n`; // es para hacer un salto de lñinea al momento que se creee el archivo
            }
            fs.writeFile(`tablas/tabla-${base}-al-${limite}.txt`, data, (err) => { //ruta contenido, is hay error retorna error si noemsaje de ok
                if (err) reject(err);
                else resolve(`tabla-${base}-al-${limite}.txt`);
            })
        }
    });
}

//Funcionlistar
let listarTabla = (base, limite) => {

    return new Promise((resolve, reject) => {

        if (!Number(base)) {
            reject(`El valor base ${base} introducido no es un numero`.red);
            return;

        } else if (!Number(limite)) {
            reject(`El valor limete ${limite} introducido no es un numero`.red);
            return;

        } else {
            let data = '' // template que lamasenara los resultado de multiplicacion
            for (let i = 1; i <= limite; i++) {
                let res = base * i
                data += `${base} * ${i} = ${res}\n`; // es para hacer un salto de lñinea al momento que se creee el archivo
            }
            resolve(data);
        }
    });
}


// F1 de exportar
module.exports = { crearArchivo, listarTabla } // es un objeto con la funcion crear archivo asi se convierte en exportable