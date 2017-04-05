"use strict";

const request = require('request');

let geocodeAddress = (searchAddress, callback) => {
    let address = encodeURIComponent(searchAddress);
    request({
        url: `http://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
        json: true // request will convert response to js object
    }, (error, response, body) => {
        // console.log(JSON.stringify(body, undefined, 4));
        if (error) {
            callback('Unable to connect to Google Servers.');
        } else if (body.status === 'ZERO_RESULTS') {
            callback('Unable to find that address.');
        } else if (body.status === 'OK') {
            callback(undefined, {
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
};

module.exports = {
    geocodeAddress
};