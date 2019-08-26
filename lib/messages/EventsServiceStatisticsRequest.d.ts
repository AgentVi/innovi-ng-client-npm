import { TimeUnitCode } from '../enums/TimeUnitCode';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
export declare class EventsServiceStatisticsRequest {
    folderId: string;
    sensorId: string;
    objectType: ObjectTypeCode;
    behaviorType: BehaviorTypeCode;
    severity: SeverityTypeCode;
    from: number;
    to: number;
    interval: TimeUnitCode;
    format: string;
}
