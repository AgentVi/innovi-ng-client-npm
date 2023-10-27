import { Schedule } from '../entities/Schedule';
import { QueryResponse } from '../messages/QueryResponse';
export declare class QueryResponseOfSchedule extends QueryResponse {
    list: Schedule[];
    code: number;
    error: string;
    page: number;
    pageSize: number;
    pages: number;
    total: number;
    queryDef: string;
    docType: string;
}
