import { UpdateStatus } from '../entities/UpdateStatus';
import { QueryResponse } from '../messages/QueryResponse';
export declare class QueryResponseOfUpdateStatus extends QueryResponse {
    list: UpdateStatus[];
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
