import { QueryResponse } from '../messages/QueryResponse';
import { JobStatus } from '../entities/JobStatus';
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
}
