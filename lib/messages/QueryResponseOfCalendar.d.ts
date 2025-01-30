import { QueryResponse } from '../messages/QueryResponse';
import { Calendar } from '../entities/Calendar';
export declare class QueryResponseOfCalendar extends QueryResponse {
    list: Calendar[];
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
