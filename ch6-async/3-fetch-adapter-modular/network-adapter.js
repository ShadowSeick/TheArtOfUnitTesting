const fetch = require('node:http');

const fetchUrlText = async (url) => {
    const resp = await fetch(url);

    if (resp.ok) {
        const text = await resp.text();
        return { ok: true, text };
    }
    return { ok: false, text: resp.statusText };
};

module.exports = {
    fetchUrlText,
};