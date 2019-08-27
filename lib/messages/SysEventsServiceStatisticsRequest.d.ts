import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { TimeUnitCode } from '../enums/TimeUnitCode';
export declare class SysEventsServiceStatisticsRequest {
    accountId: string;
    folderId: string;
    sensorId: string;
    objectType: ObjectTypeCode[];
    behaviorType: BehaviorTypeCode[];
    severity: SeverityTypeCode[];
    from: number;
    to: number;
    interval: TimeUnitCode;
    format: string;
    constructor(accountId?: string, folderId?: string, sensorId?: string, objectType?: ObjectTypeCode[], behaviorType?: BehaviorTypeCode[], severity?: SeverityTypeCode[], from?: number, to?: number, interval?: TimeUnitCode, format?: string);
}
