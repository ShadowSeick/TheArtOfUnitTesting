const isWebsiteAlive = async (network) => {
    const result = await network.fetchUrlText('http://example.com');
    if (result.ok) {
        const text = result.text;
        return onFetchSuccess(text);
    }
    return Promise.reject(onFetchError(result.text));
};

const onFetchSuccess = (text) => {
    if (text.includes('illustrative')) {
        return { success: true, status: 'ok' };
    } else {
        //how can we test this path?
        return { success: false, status: 'text missing' };
    }
};

const onFetchError = (err) => {
    return { success: false, status: err };
};

module.exports = {
    isWebsiteAlive,
};