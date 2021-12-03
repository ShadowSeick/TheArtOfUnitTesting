import { IComplicatedLogger } from "./interfaces/complicated-logger";

export class PasswordVerifier2 {
    rules: Array<any>;
    logger: IComplicatedLogger;

    constructor(rules: Array<any>, logger: IComplicatedLogger) {
        this.rules = rules;
        this.logger = logger;
    }

    verify(input: string) {
        const failed = this.rules
            .map((rule) => rule(input))
            .filter((result) => result === false);
        if (failed.length === 0) {
            this.logger.info('PASSED', 'method');
            return true;
        }
        this.logger.info('FAIL', 'method');
        return false
    }
};