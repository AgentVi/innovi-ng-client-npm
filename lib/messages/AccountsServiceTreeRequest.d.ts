import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { SensorStatusCode } from '../enums/SensorStatusCode';
export declare class AccountsServiceTreeRequest {
    id: string;
    includeSensors: boolean;
    status: SensorStatusCode[];
    behaviorType: BehaviorTypeCode[];
    constructor(id?: string, includeSensors?: boolean, status?: SensorStatusCode[], behaviorType?: BehaviorTypeCode[]);
}
