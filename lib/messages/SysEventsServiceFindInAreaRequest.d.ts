import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
export declare class SysEventsServiceFindInAreaRequest {
    accountId: string;
    folderId: string[];
    sensorId: string[];
    objectType: ObjectTypeCode[];
    behaviorType: BehaviorTypeCode[];
    severity: SeverityTypeCode[];
    from: number;
    to: number;
    sort: string;
    page: number;
    pageSize: number;
    constructor(accountId?: string, folderId?: string[], sensorId?: string[], objectType?: ObjectTypeCode[], behaviorType?: BehaviorTypeCode[], severity?: SeverityTypeCode[], from?: number, to?: number, sort?: string, page?: number, pageSize?: number);
}
