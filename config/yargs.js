const opts = {
    descripcion: {
        alias: 'd',
        demand: true
    },
    completado: {
        alias: 'c',
        default: true
    }
}

const argv = require('yargs')
    .command('crear', 'Crea una lista de tareas', opts)
    .command('actualizar', 'Actualiza una lista de tareas', opts)
    .command('borrar', 'Borra una tarea de la lista', opts)
    .help()
    .argv;

module.exports = {
    argv
}