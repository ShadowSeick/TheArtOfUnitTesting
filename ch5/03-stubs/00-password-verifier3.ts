import { IComplicatedLogger } from "../02-longinterfaces-faking/interfaces/complicated-logger";
import { MaintenaceWindow } from './maintenance-window';

export class PasswordVerifier3 {
    private _rules: any[];
    private _logger: IComplicatedLogger;
    private _maintenanceWindow: MaintenaceWindow;

    constructor(
        rules: any[],
        logger: IComplicatedLogger,
        maintenanceWindow: MaintenaceWindow
    ) {
        this._rules = rules;
        this._logger = logger;
        this._maintenanceWindow = maintenanceWindow;
    }

    verify(input: string): boolean {
        if (this._maintenanceWindow.isUnderMaintenance()) {
            this._logger.info('Under Maintenance', 'verify');
            return false;
        }
        const failed = this._rules
            .map((rule) => rule(input))
            .filter((result) => result === false);

            if (failed.length === 0) {
                this._logger.info('PASSED', 'verify');
                return true;
            }
            this._logger.info('FAILED', 'verify');
            return false;
    }
}