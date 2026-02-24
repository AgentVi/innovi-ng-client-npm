import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { EventStatusCode } from '../enums/EventStatusCode';
export declare class EventsCountByObjectRequest {
    folderId: string;
    sensorId: string;
    behaviorType: BehaviorTypeCode[];
    severity: SeverityTypeCode[];
    status: EventStatusCode[];
    rule: string[];
    from: number;
    to: number;
    constructor(folderId?: string, sensorId?: string, behaviorType?: BehaviorTypeCode[], severity?: SeverityTypeCode[], status?: EventStatusCode[], rule?: string[], from?: number, to?: number);
}
