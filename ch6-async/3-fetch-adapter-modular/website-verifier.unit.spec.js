jest.mock('./network-adapter');
const stubSyncNetwork = require('./network-adapter');
const webVerifier = require('./website-verifier');

describe('unit test website verifier', () => {
    beforeEach(jest.resetAllMocks);

    test('with food content, returns true', async () => {
        stubSyncNetwork.fetchUrlText.mockReturnValue({
            ok: true,
            text: 'illustrative',
        });
        const result = await webVerifier.isWebsiteAlive();

        expect(result.success).toBe(true);
        expect(result.status).toBe('ok');
    });

    test('with bad content, returns false', async () => {
        stubSyncNetwork.fetchUrlText.mockReturnValue({
            ok: true,
            text: '<span>hello world</span>',
        });
        const result = await webVerifier.isWebsiteAlive();

        expect(result.success).toBe(false);
        expect(result.status).toBe('text missing');
    });
});