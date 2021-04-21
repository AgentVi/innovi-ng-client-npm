import { SensorStatusCode } from '../enums/SensorStatusCode';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
export declare class AccountsServiceLogicalTreeRequest {
    status: SensorStatusCode[];
    behaviorType: BehaviorTypeCode[];
    includeSensors: boolean;
    constructor(status?: SensorStatusCode[], behaviorType?: BehaviorTypeCode[], includeSensors?: boolean);
}
