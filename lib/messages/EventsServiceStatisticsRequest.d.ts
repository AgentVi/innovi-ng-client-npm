import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { EventStatusCode } from '../enums/EventStatusCode';
import { TimeUnitCode } from '../enums/TimeUnitCode';
export declare class EventsServiceStatisticsRequest {
    folderId: string;
    sensorId: string;
    objectType: ObjectTypeCode[];
    behaviorType: BehaviorTypeCode[];
    severity: SeverityTypeCode[];
    status: EventStatusCode[];
    from: number;
    to: number;
    interval: TimeUnitCode;
    label: string;
    constructor(folderId?: string, sensorId?: string, objectType?: ObjectTypeCode[], behaviorType?: BehaviorTypeCode[], severity?: SeverityTypeCode[], status?: EventStatusCode[], from?: number, to?: number, interval?: TimeUnitCode, label?: string);
}
