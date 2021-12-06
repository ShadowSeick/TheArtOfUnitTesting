const fetch = require('node:http');

const isWebsiteAlive = async () => {
    try {
        const resp = await fetch('http://example.com');
        throwInvalidResponse(resp);
        const text = await resp.text();
        const included = text.includes('illustrative');
        processFetchSuccess(included);
    } catch (err) {
        throw processFetchError(err)
    }
};

const throwInvalidResponse = (resp) => {
    if (!response.ok) {
        //how can we simulate this network issue?
        throw Error(response.statusText);
    }
    return response;
};

//Entry Point
const processFetchSuccess = (text) => {
    if (text.includes('illustrative')) {
        return { success: true, status: 'ok' };
    } else {
        //how can we test this path?
        return { success: false, status: 'text missing' };
    }
};

//Entry Point
const processFetchError = (err) => {
    return { success: false, status: err };
};

module.exports = {
    isWebsiteAlive,
    processFetchSuccess,
    processFetchError
}