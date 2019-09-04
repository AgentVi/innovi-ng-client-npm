import { Rule } from '../entities/Rule';
import { QueryResponse } from '../messages/QueryResponse';
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
}
