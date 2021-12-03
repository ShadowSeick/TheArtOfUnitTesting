import { IComplicatedLogger } from "./interfaces/complicated-logger";
import { PasswordVerifier2 } from "./00-password-verifier2";
const { stringMatching } = expect;

describe('working with long interfaces', () => {
    describe('password verifier', () => {
        test('verify, w logger & passing, calls logger with PASS', () => {
            const mockLog: IComplicatedLogger = {
                info: jest.fn(),
                warn: jest.fn(),
                debug: jest.fn(),
                error: jest.fn()
            };

            const verifier = new PasswordVerifier2([], mockLog);
            verifier.verify('anything');

            expect(mockLog.info).toHaveBeenCalledWith(stringMatching(/PASS/));
        });
    });
});