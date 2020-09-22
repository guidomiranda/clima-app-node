const axios = require('axios')

const getClima = async(lugar) => {
    lat = lugar.lat
    lng = lugar.lng

    const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=ea7f5f912920ba39c9da2c6a360f2354&units=metric`)

    return resp.data.main.temp
}

module.exports = {
    getClima
}