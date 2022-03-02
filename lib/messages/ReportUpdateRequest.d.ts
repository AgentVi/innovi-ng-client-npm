import { JobStatusCode } from '../enums/JobStatusCode';
export declare class ReportUpdateRequest {
    id: string;
    status: JobStatusCode;
    constructor(id?: string, status?: JobStatusCode);
}
