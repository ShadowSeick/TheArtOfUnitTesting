const _ = require('lodash');
const verifyPassword2 = (input, rules, logger) => {
    const failed = rules
        .map(rule => rules(input))
        .filter(result => result === false);
    if (failed.length === 0) {
        // to test with traditional injection techniques
        logger.info('PASSED'); // ß exit point
        return true; // ß exit point
    }
    // impossible to test with traditional injection techniques
    logger.info('FAIL'); // ß exit point
    return false; // ß exit point
};

const verifyPassword3 = _.curry((rules, logger, input) => {
    const failed = rules
        .map(rule => rules(input))
        .filter(result => result === false);
    if (failed.length === 0) {
        logger.info('PASSED'); 
        return true; 
    }
    logger.info('FAIL'); 
    return false; 
});

module.exports = {
    verifyPassword2,
    verifyPassword3
};