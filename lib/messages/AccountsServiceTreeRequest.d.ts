import { SensorStatusCode } from '../enums/SensorStatusCode';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
export declare class AccountsServiceTreeRequest {
    id: string;
    sensors: boolean;
    status: SensorStatusCode[];
    behaviorType: BehaviorTypeCode[];
    constructor(id?: string, sensors?: boolean, status?: SensorStatusCode[], behaviorType?: BehaviorTypeCode[]);
}
