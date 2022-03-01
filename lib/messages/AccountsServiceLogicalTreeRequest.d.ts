import { SensorStatusCode } from '../enums/SensorStatusCode';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
export declare class AccountsServiceLogicalTreeRequest {
    status: SensorStatusCode[];
    behaviorType: BehaviorTypeCode[];
    includeSensors: boolean;
    includeNonRecordingSensors: boolean;
    search: string;
    constructor(status?: SensorStatusCode[], behaviorType?: BehaviorTypeCode[], includeSensors?: boolean, includeNonRecordingSensors?: boolean, search?: string);
}
