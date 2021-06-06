import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { SensorStatusCode } from '../enums/SensorStatusCode';
export declare class AccountsServiceLogicalTreeRequest {
    status: SensorStatusCode[];
    behaviorType: BehaviorTypeCode[];
    includeSensors: boolean;
    constructor(status?: SensorStatusCode[], behaviorType?: BehaviorTypeCode[], includeSensors?: boolean);
}
