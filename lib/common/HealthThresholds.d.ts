import { Thresholds } from '../common/Thresholds';
export declare class HealthThresholds {
    isEmpty: boolean;
    sensorsThresholds: Thresholds;
    applianceThresholds: Thresholds;
    constructor(isEmpty?: boolean, sensorsThresholds?: Thresholds, applianceThresholds?: Thresholds);
}
