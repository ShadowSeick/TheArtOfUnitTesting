const { TestWatcher } = require('@jest/core');
const { PasswordVerifier } = require('./00-password-verifier00');

// If we implement this kind of "Test Double" or "Fake" instead of hard coding the object,
// we can reuse it later as a stub or mock object.
class FakeLogger {
    logged = '';

    info(text) {
        this.logged = text;
    };
};

describe('duck typing with function constructor injection', () => {
    describe('password verifier', () => {
        test('logger&passing scenario, calls logger with PASSED', () => {
            let logged = '';
            const mockLog = new FakeLogger();

            const verifier = new PasswordVerifier([], mockLog);
            verifier.verify('any input');

            expect(mockLog.logged).toMatch(/PASSED/);
        });
    });
});