import { ReportDefinition } from '../entities/ReportDefinition';
export declare class ReportsServiceUpdateRequest {
    id: string;
    body: ReportDefinition;
    constructor(id?: string, body?: ReportDefinition);
}
