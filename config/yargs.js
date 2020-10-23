const opts = {
    base: {
        demand: true,
        alias: 'b'
    },
    limite: {
        alias: 'l',
        default: 10
    }
}

const argv = require('yargs')
    .command('listar', 'se imprime en consola la tabla de multiplicar', opts)
    .command('crear', 'Se crear archivo con la tabla de multiplicar', opts)
    .help() // ayuda por default 
    .argv; //querimiento de libreria dejar asi

module.exports = { argv }