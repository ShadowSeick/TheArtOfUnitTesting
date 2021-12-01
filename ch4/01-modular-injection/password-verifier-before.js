const { info, debug } = require('../00-function-param-injection/complicated-logger');
const { getLogLevel } = require('./configuration-service');

const log = (text) => {
    if (getLogLevel() === 'info') {
        info(text);
    }
    if (getLogLevel() === 'debug') {
        debug(text);
    }
};

const verifyPassword = (input, rules) => {
    const failed = rules
        .map(rule => rules(input))
        .filter(result => result === false);
    if (failed.length === 0) {
        // to test with traditional injection techniques
        log.info('PASSED'); // ß exit point
        return true; // ß exit point
    }
    // impossible to test with traditional injection techniques
    log.info('FAIL'); // ß exit point
    return false; // ß exit point
};

module.exports = {
    verifyPassword
};