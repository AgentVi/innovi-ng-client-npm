import { SearchEvent } from '../entities/SearchEvent';
import { QueryResponse } from '../messages/QueryResponse';
export declare class QueryResponseOfSearchEvent extends QueryResponse {
    list: SearchEvent[];
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
