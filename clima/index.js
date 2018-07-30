const axios = require('axios');
const API_KEY = 'a84ee83dc0d48c4c1a5967098ccdfee8';
const u = 'metric';

const getClima = async(lat, lng) => {
    let resp = await axios.get(`http://api.openweathermap.org/data/2.5/weather?lat=${ lat }&lon=${ lng }&units=${ u }&appid=${ API_KEY }`);
    let temp = resp.data.main.temp;
    return temp;
};

module.exports = {
    getClima
}