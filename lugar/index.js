const axios = require('axios');
const API_KEY = 'AIzaSyAb5P056qMoj_nw7AquPRM0BPNARxAFJkk';
const getLugarLatLng = async(direccion) => {
    const direccionURL = encodeURI(direccion);
    const resp = await axios.get(`http://maps.googleapis.com/maps/api/geocode/json?address=${ direccionURL }&API_KEY=${ API_KEY }`);

    if(resp.data.status==='ZERO_RESULTS'){
        throw new Error(`No hay resultados para la dirección "${ direccion }"`);
    }
    let dir = resp.data.results[0].formatted_address;
    let lat = resp.data.results[0].geometry.location.lat;
    let lng = resp.data.results[0].geometry.location.lng;
    return {
        dir,
        lat,
        lng
    };
};

module.exports = {
    getLugarLatLng
}