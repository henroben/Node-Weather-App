"use strict";

const request = require('request');

let geocodeAddress = (searchAddress) => {

    return new Promise((resolve, reject) => {
        let address = encodeURIComponent(searchAddress);
        request({
            url: `http://maps.googleapis.com/maps/api/geocode/json?address=${address}`,
            json: true // request will convert response to js object
        }, (error, response, body) => {
            if (error) {
                reject('Unable to connect to Google Servers.');
            } else if (body.status === 'ZERO_RESULTS') {
                reject('Unable to find that address.');
            } else if (body.status === 'OK') {
                resolve({
                    address: body.results[0].formatted_address,
                    latitude: body.results[0].geometry.location.lat,
                    longitude: body.results[0].geometry.location.lng
                });
            }
        });
    });

};

geocodeAddress('co2 7ru').then((location) => {
    console.log(location);
}, (error) => {
    console.log(error);
});