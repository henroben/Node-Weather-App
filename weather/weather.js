"use strict";

const request = require('request');

let getWeather = (lat, lng, callback) => {
    request({
        url: `https://api.darksky.net/forecast/6770e9dc46aacb5201e25d1cda632974/${lat},${lng}?units=si`,
        json: true // request will convert response to js object
    }, (error, response, body) => {
        // console.log(JSON.stringify(body, undefined, 4));
        if (!error && response.statusCode === 200) {
            callback(undefined, {
                temperature: body.currently.temperature,
                feelsLike: body.currently.apparentTemperature,
                summary: body.currently.summary
            });
        } else {
            callback('Unable to fetch weather');
        }
    });
};

module.exports = {
    getWeather
};