import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
export declare class RulesServiceFindRequest {
    folderId: string;
    physical: boolean;
    sensorId: string;
    search: string;
    behaviorType: BehaviorTypeCode[];
    severity: SeverityTypeCode[];
    sort: string;
    page: number;
    pageSize: number;
    constructor(folderId?: string, physical?: boolean, sensorId?: string, search?: string, behaviorType?: BehaviorTypeCode[], severity?: SeverityTypeCode[], sort?: string, page?: number, pageSize?: number);
}
