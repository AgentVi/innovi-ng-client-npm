import { QueryResponse } from '../messages/QueryResponse';
import { Event } from '../entities/Event';
export declare class QueryResponseOfEvent extends QueryResponse {
    list: Event[];
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
