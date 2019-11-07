import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
export declare class RulesServiceFindRequest {
    folderId: string;
    sensorId: string;
    search: string;
    behaviorType: BehaviorTypeCode[];
    severity: SeverityTypeCode[];
    sort: string;
    page: number;
    pageSize: number;
    format: string;
    fields: string[];
    constructor(folderId?: string, sensorId?: string, search?: string, behaviorType?: BehaviorTypeCode[], severity?: SeverityTypeCode[], sort?: string, page?: number, pageSize?: number, format?: string, fields?: string[]);
}
