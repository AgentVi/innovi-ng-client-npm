import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
export declare class RulesServiceExportRequest {
    folderId: string;
    sensorId: string;
    search: string;
    behaviorType: BehaviorTypeCode[];
    severity: SeverityTypeCode[];
    sort: string;
    format: string;
    fields: string[];
    constructor(folderId?: string, sensorId?: string, search?: string, behaviorType?: BehaviorTypeCode[], severity?: SeverityTypeCode[], sort?: string, format?: string, fields?: string[]);
}
