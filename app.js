const { alias } = require('yargs');
const colors = require('colors/safe');
// const { argv } = require('./config/yargs.js');//F1 nose si hay diferencia ami me gusta esta forma
const argv = require('./config/yargs.js').argv; //F2
const { crearArchivo, listarTabla } = require('./Multiplicar/multiplicar.js');
let comando = argv._[0]; // el array donde estan los comandos se llama '_' son los que estan sin paramnetro

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite)
            .then(archivo => console.log(archivo))
            .catch(e => console.log(e));
        break;

    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`El archivo ${colors.green(`tabla-${archivo}`)} ha sido Creado!`))// color con template string dentro d eotro template string
            .catch(e => console.log(e));
        break;

    default:
        console.log('Comando no reconocido');
        break;
}