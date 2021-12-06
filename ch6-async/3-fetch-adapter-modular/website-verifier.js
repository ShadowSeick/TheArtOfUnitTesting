const network = require('./network-adapter');

const isWebsiteAlive = async () => {
    try {
        const result = await network.fetchUrlText('http://example.com');
        if (!result.ok) {
            throw result.text;
        }
        const text = result.text;
        return processFetchSuccess(text);
    } catch (err) {
        throw processFetchError(err);
    }
};

const processFetchSuccess = (text) => {
    if (text.includes('illustrative')) {
        return Promise.resolve( { success: true, status: 'ok' });
    } else {
        //how can we test this path?
        return Promise.resolve({ success: false, status: 'text missing' });
    }
};

const processFetchError = (err) => {
    return { success: false, status: err };
};

module.exports = {
    isWebsiteAlive,
};