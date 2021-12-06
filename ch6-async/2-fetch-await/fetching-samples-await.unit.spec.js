const samples = require('./fetching-samples-await');

describe('website up check', () => {
    test('on fetch success with food content, returns true', () => {
        const result = samples.processFetchSuccess('illustrative');

        expect(result.success).toBe(true);
        expect(result.status).toBe('ok');
    });
    test('website content does not match, returns false', () => {
        const result = samples.processFetchSuccess('bad content');

        expect(result.success).toBe(false);
        expect(result.status).toBe('text missing');
    });
    test('When fetch fails, returns error text and false', () => {
        const result = samples.processFetchError('error text');

        expect(result.success).toBe(false);
        expect(result.status).toBe('error text');
    });
});