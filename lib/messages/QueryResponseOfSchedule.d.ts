import { QueryResponse } from '../messages/QueryResponse';
import { Schedule } from '../entities/Schedule';
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
    cursor: string;
}
