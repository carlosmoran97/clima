//requires
const {argv} = require('./conf/yargs');
const lugar = require('./lugar');
const clima = require('./clima');

(async()=>{
    try {
        let resp = await lugar.getLugarLatLng(argv.direccion);
        let temp = await clima.getClima(resp.lat, resp.lng);
        console.log(`La temperatura en ${ resp.dir } es de ${ temp } C.`);
    } catch (e) {
        console.log(e.message);
    }
})();