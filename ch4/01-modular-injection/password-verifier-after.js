const originalDependencies = {
    log: require('../00-function-param-injection/complicated-logger'),
};

let dependencies = { ...originalDependencies };

const resetDependencies = () => {
    dependencies = { ...originalDependencies };
};

const injectDependencies = (fakes) => {
    Object.assign(dependencies, fakes);
};

const verifyPassword = (input, rules) => {
    const failed = rules
        .map(rule => rules(input))
        .filter(result => result === false);
    if (failed.length === 0) {
        // to test with traditional injection techniques
        dependencies.log.info('PASSED'); // ß exit point
        return true; // ß exit point
    }
    // impossible to test with traditional injection techniques
    dependencies.log.info('FAIL'); // ß exit point
    return false; // ß exit point
};

module.exports = {
    verifyPassword,
    injectDependencies,
    resetDependencies
};