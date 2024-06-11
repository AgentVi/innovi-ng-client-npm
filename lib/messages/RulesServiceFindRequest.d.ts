import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
export declare class RulesServiceFindRequest {
    folderId: string;
    physical: boolean;
    applianceId: string;
    sensorId: string;
    search: string;
    behaviorType: BehaviorTypeCode[];
    exclude: BehaviorTypeCode[];
    severity: SeverityTypeCode[];
    sort: string;
    page: number;
    pageSize: number;
    constructor(folderId?: string, physical?: boolean, applianceId?: string, sensorId?: string, search?: string, behaviorType?: BehaviorTypeCode[], exclude?: BehaviorTypeCode[], severity?: SeverityTypeCode[], sort?: string, page?: number, pageSize?: number);
}
