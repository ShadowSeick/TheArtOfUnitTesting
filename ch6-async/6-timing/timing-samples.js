const calculate1 = (x, y, resultCallback) => {
    setTimeout(() => { resultCallback(x + y); }, 5000);
};
const calculate2 = (getInputsFn, resultsFn) => {
    setInterval(() => {
        const { x, y } = getInputsFn();
        resultsFn(x + y);
    }, 1000);
};

module.exports = {
    calculate1,
    calculate2
};