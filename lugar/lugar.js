const axios = require('axios')


const getLugarLaLng = async(dir) => {
    let encodedUri = encodeURI(dir);

    const instance = axios.create({
        baseURL: `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedUri}.json`,
        params: { 'access_token': 'pk.eyJ1IjoiZ3Vpb21pcmFuZGEiLCJhIjoiY2tmZTFsdjZ0MDBrZDJycXRhcTI3ZnE3MyJ9.HetgBb_6OU_rh-qaRyNJPQ' }
    })

    const resp = await instance.get()

    if (resp.data.features[0] === 0) {
        throw new Error(`No hay resultados para ${dir}`)
    }

    const data = resp.data.features[0]
    const direccion = data.place_name
    const lat = data.center[0]
    const lng = data.center[1]

    return {
        direccion,
        lat,
        lng
    }

}

module.exports = {
    getLugarLaLng
}