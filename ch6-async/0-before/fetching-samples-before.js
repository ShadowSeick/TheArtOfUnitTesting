const fetch = require('node-fetch');
//-------CALLBACK VERSION----------------
const isWebsiteAliveWithCallback = (callback) => {
    const website = 'http://example.com';
    fetch(website)
        .then((response) => {
            if (!response.ok) {
                //how can we simulate this network issue?
                throw Error(response.statusText);
            }
            return response;
        })
        .then((response) => response.text())
        .then((text) => {
            if (text.includes('illustrative')) {
                callback({ success: true, status: 'ok' });
            } else {
                //how can we test this path?
                callback({ success: false, status: 'text missing' });
            }
        })
        .catch((err) => {
            callback({ success: false, status: err });
        });
};

//----------AWAIT VERSION----------------
const isWebsiteAliveWithAsyncAwait = async () => {
    try {
        const resp = await fetch('http://example.com');
        if (!resp.ok) {
            //how can we simulate a non ok response?
            throw resp.statusText;
        }
        const text = await resp.text();
        const included = text.includes('illustrative');
        if (included) {
            return { success: true, status: 'ok' };
        }
        //how can we simulate different website content?
        throw 'text missing';
    } catch (err) {
        throw { success: false, status: err };
    }
};

module.exports = {
    isWebsiteAliveWithAsyncAwait,
    isWebsiteAliveWithCallback
};