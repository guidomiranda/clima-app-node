const argv = require('./config/yargs').argv
const info = require('./info/info')

info.getInfo(argv.direccion)
    .then((temp) => console.log(`El clima de ${argv.direccion} es de ${temp}`))
    .catch(err => console.log(`No se pudo determinar el clima de ${dir}`, err))