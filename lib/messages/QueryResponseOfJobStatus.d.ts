import { JobStatus } from '../entities/JobStatus';
import { QueryResponse } from '../messages/QueryResponse';
export declare class QueryResponseOfJobStatus extends QueryResponse {
    entity: JobStatus[];
    code: number;
    error: string;
    page: number;
    pageSize: number;
    pages: number;
    total: number;
    queryDef: string;
    docType: string;
    cursor: string;
}
