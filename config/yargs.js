const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            demand: true,
            desc: 'Direccion de la ciutdad para obtener el clima'
        }
    })
    .argv

module.exports = {
    argv
}