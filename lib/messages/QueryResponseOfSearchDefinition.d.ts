import { SearchDefinition } from '../entities/SearchDefinition';
import { QueryResponse } from '../messages/QueryResponse';
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
}
