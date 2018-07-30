const {argv} = require('yargs').options({
    direccion: {
        alias: 'd',
        demand: true,
        desc: 'Dirección de la ciudad que se quiere ovtener el clima'
    }
});

module.exports = {
    argv
}