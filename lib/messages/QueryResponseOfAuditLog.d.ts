import { QueryResponse } from '../messages/QueryResponse';
import { AuditLog } from '../entities/AuditLog';
export declare class QueryResponseOfAuditLog extends QueryResponse {
    list: AuditLog[];
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
