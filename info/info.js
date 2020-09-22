const lugar = require('../lugar/lugar')
const clima = require('../clima/clima')


const getInfo = async(dir) => {
    //const rsLugar = await lugar.getLugarLaLng(dir)
    //console.log(rsLugar);
    try {
        const rsLugar = await lugar.getLugarLaLng(dir)

        const rsClima = await clima.getClima(rsLugar)

        return rsClima
    } catch (error) {
        return `No se pudo determinar el clima de ${dir}`
    }
}

module.exports = {
    getInfo
}