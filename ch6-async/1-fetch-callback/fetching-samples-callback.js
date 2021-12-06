const fetch = require('node:http');

const isWebsiteAlive = (callback) => {
    const website = 'http://example.com';
    fetch(website)
        .then(throwInvalidResponse)
        .then((response) => response.text())
        .then((text) => processFetchSuccess(text, callback))
        .catch((err) => processFetchError(err, callback));
};

const throwInvalidResponse = (resp) => {
    if (!response.ok) {
        //how can we simulate this network issue?
        throw Error(response.statusText);
    }
    return response;
};

//Entry Point
const processFetchSuccess = (text, callback) => {
    if (text.includes('illustrative')) {
        callback({ success: true, status: 'ok' });
    } else {
        //how can we test this path?
        callback({ success: false, status: 'text missing' });
    }
};

//Entry Point
const processFetchError = (err, callback) => {
    callback({ success: false, status: err });
};

module.exports = {
    isWebsiteAlive,
    processFetchSuccess,
    processFetchError
}