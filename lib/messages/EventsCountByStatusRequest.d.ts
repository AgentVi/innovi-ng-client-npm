import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
export declare class EventsCountByStatusRequest {
    folderId: string;
    sensorId: string;
    objectType: ObjectTypeCode[];
    behaviorType: BehaviorTypeCode[];
    severity: SeverityTypeCode[];
    rule: string[];
    from: number;
    to: number;
    constructor(folderId?: string, sensorId?: string, objectType?: ObjectTypeCode[], behaviorType?: BehaviorTypeCode[], severity?: SeverityTypeCode[], rule?: string[], from?: number, to?: number);
}
