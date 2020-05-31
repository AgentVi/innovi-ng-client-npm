import { Thresholds } from '../common/Thresholds';
export declare class HealthThresholds {
    isActive: boolean;
    sensorsThresholds: Thresholds;
    applianceThresholds: Thresholds;
    constructor(isActive?: boolean, sensorsThresholds?: Thresholds, applianceThresholds?: Thresholds);
}
