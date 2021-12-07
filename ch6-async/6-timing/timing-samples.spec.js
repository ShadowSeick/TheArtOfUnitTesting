const Samples = require('./timing-samples');

describe('monkey patching', () => {
    let originalTimeOut;
    beforeEach(() => (originalTimeOut = setTimeout));
    afterEach(() => (setTimeout = originalTimeOut));

    test('calculate1', () => {
        setTimeout = (callback, ms) => callback();
        Samples.calculate1(1, 2, (result) => {
            expect(result).toBe(3);
        });
    });
});

describe('calculate1 - with jest', () => {
    beforeEach(jest.clearAllTimers);
    beforeEach(jest.useFakeTimers);

    test('fake timeout with callback', () => {
        Samples.calculate1(1, 2, (result) => {
            expect(result).toBe(3);
        });
        jest.advanceTimersToNextTimer();
    });
});

describe('calculate with intervals', () => {
    beforeEach(jest.clearAllTimers);
    beforeEach(jest.useFakeTimers);

    test('calculate, incr input/output, calculate correctly', () => {
        let xInput = 1;
        let yInput = 2;
        const inputFn = () => ({ x: xInput++, y: yInput++ });

        const results = [];
        Samples.calculate2(inputFn, (result) => results.push(result));

        jest.advanceTimersToNextTimer();
        jest.advanceTimersToNextTimer();

        expect(results[0]).toBe(3);
        expect(results[1]).toBe(5);
    });
});