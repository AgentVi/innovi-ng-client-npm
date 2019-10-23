import { SeverityTypeCode } from '../enums/SeverityTypeCode';
export declare class RulesServiceFindAnomalyRequest {
    folderId: string;
    sensorId: string;
    search: string;
    severity: SeverityTypeCode[];
    sort: string;
    page: number;
    pageSize: number;
    constructor(folderId?: string, sensorId?: string, search?: string, severity?: SeverityTypeCode[], sort?: string, page?: number, pageSize?: number);
}
