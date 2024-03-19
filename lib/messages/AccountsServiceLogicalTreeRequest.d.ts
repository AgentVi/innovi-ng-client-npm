import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { SensorStatusCode } from '../enums/SensorStatusCode';
export declare class AccountsServiceLogicalTreeRequest {
    status: SensorStatusCode[];
    behaviorType: BehaviorTypeCode[];
    includeSensors: boolean;
    includeRules: boolean;
    includeNonRecordingSensors: boolean;
    search: string;
    constructor(status?: SensorStatusCode[], behaviorType?: BehaviorTypeCode[], includeSensors?: boolean, includeRules?: boolean, includeNonRecordingSensors?: boolean, search?: string);
}
