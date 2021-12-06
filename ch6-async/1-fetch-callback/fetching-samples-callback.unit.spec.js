const samples = require('./fetching-samples-callback');

describe('Website alive checking', () => {
    test('content matches, returns true,', (done) => {
        samples.processFetchSuccess('illustrative', (result, err) => {
            expect(err).toBeUndefined();
            expect(result.success).toBe(true);
            expect(result.status).toBe('ok');
            done()
        });
    });
    test('website content does not match, returns false', (done) => {
        samples.processFetchSuccess('bad content', (result, err) => {
            expect(result.status).toBe('text missing');
            done();
        });
    });
    test('When fetch fails, returns false', (done) => {
        const errorText = new Error('error text');

        samples.processFetchError(errorText, (result, err) => {
            console.log(result);
            expect(result.status).toBe(errorText);
            done();
        });
    });
});