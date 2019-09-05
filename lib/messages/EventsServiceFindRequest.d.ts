import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
export declare class EventsServiceFindRequest {
    folderId: string;
    subFolders: boolean;
    sensorId: string;
    objectType: ObjectTypeCode;
    behaviorType: BehaviorTypeCode;
    severity: SeverityTypeCode;
    from: number;
    to: number;
    sort: string;
    page: number;
    pageSize: number;
    constructor(folderId?: string, subFolders?: boolean, sensorId?: string, objectType?: ObjectTypeCode, behaviorType?: BehaviorTypeCode, severity?: SeverityTypeCode, from?: number, to?: number, sort?: string, page?: number, pageSize?: number);
}
