import { EventStatusCode } from '../enums/EventStatusCode';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
export declare class EventsCountByBehaviorRequest {
    folderId: string;
    sensorId: string;
    objectType: ObjectTypeCode[];
    severity: SeverityTypeCode[];
    status: EventStatusCode[];
    rule: string[];
    from: number;
    to: number;
    constructor(folderId?: string, sensorId?: string, objectType?: ObjectTypeCode[], severity?: SeverityTypeCode[], status?: EventStatusCode[], rule?: string[], from?: number, to?: number);
}
