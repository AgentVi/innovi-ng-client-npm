import { QueryResponse } from '../messages/QueryResponse';
import { Rule } from '../entities/Rule';
export declare class QueryResponseOfRule extends QueryResponse {
    list: Rule[];
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
