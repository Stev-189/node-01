const argv = require('yargs')
    .command('listar', 'se imprime en consola la tabla de multiplicar', { // entrada a yargs 
        //se llama en node node app listar
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .command('crear', 'Se crear archivo con la tabla de multiplicar', { // entrada a yargs 
        //se llama en node node app listar
        base: {
            demand: true,
            alias: 'b'
        },
        limite: {
            alias: 'l',
            default: 10
        }
    })
    .help() // ayuda por default 
    .argv; //querimiento de libreria dejar asi
const { alias } = require('yargs');
const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar.js')
    // console.log(argv);
let comando = argv._[0]; // el array donde estan los comandos se llama '_' son los que estan sin paramnetro

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(archivo))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`El archivo tabla-${archivo} ha sido Creado!`))
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}