const argv = require('yargs')
    .command('listar', 'se imprime en consola la tabla de multiplicar', { // entrada a yargs 
        //se llama en node node app listar
        base: {
            demand: true, //obligatorio
            alias: 'b'
        },
        //node app listar (-b 6 0 --base 6) 
        limite: {
            alias: 'l',
            default: 10
        }
        //node app listar (-l 6 0 --limite 6) 
    })
    .help() // ayuda por default 
    .argv; //querimiento de libreria dejar asi
const { alias } = require('yargs');
const { crearArchivo } = require('./Multiplicar/multiplicar.js')

// let argv = process.argv;
// let parametro = argv[2];
// let base = parametro.split('=')[1]
// console.log(base);

// let argv2 = process.argv;
console.log(argv.base);
console.log('Limite: ', argv.limite); // llamado valor elemento
console.log('Base: ', argv.base); // llamado valor elemento
// console.log(argv2);

// crearArchivo(base)
// .then(archivo => console.log(`El archivo tabla-${archivo} ha sido Creado!`))
// .catch(e => console.log(e));