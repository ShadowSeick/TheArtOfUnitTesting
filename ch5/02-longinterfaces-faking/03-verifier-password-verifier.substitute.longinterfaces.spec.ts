import { IComplicatedLogger } from "./interfaces/complicated-logger";
import { PasswordVerifier2 } from "./00-password-verifier2";
import { Substitute, Arg } from '@fluffy-spoon/substitute';

describe('working with long interfaces', () => {
    describe('password verifier', () => {
        test('verify, w logger & passing, calls logger w PASS', () => {
            const mockLog = Substitute.for<IComplicatedLogger>();

            const verifier = new PasswordVerifier2([], mockLog);
            verifier.verify('anything');

            mockLog.received().info(
                Arg.is(x => x.includes('PASSED')),
                'method'
            );
        });
    });
});