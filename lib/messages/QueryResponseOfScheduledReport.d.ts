import { QueryResponse } from '../messages/QueryResponse';
import { ScheduledReport } from '../entities/ScheduledReport';
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
}
