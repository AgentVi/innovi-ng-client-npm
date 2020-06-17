import { SeverityTypeCode } from '../enums/SeverityTypeCode';
export declare class RulesServiceFindAnomalyRequest {
    folderId: string;
    physical: boolean;
    sensorId: string;
    search: string;
    severity: SeverityTypeCode[];
    sort: string;
    page: number;
    pageSize: number;
    constructor(folderId?: string, physical?: boolean, sensorId?: string, search?: string, severity?: SeverityTypeCode[], sort?: string, page?: number, pageSize?: number);
}
