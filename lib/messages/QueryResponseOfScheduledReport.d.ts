import { ScheduledReport } from '../entities/ScheduledReport';
import { QueryResponse } from '../messages/QueryResponse';
export declare class QueryResponseOfScheduledReport extends QueryResponse {
    list: ScheduledReport[];
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
