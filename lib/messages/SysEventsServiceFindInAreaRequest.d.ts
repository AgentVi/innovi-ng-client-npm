import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
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
    after: string;
    limit: number;
    constructor(accountId?: string, folderId?: string[], sensorId?: string[], objectType?: ObjectTypeCode[], behaviorType?: BehaviorTypeCode[], severity?: SeverityTypeCode[], from?: number, to?: number, sort?: string, page?: number, pageSize?: number, after?: string, limit?: number);
}
