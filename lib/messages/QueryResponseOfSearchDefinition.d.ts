import { QueryResponse } from '../messages/QueryResponse';
import { SearchDefinition } from '../entities/SearchDefinition';
export declare class QueryResponseOfSearchDefinition extends QueryResponse {
    list: SearchDefinition[];
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
