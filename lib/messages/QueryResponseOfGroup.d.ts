import { QueryResponse } from '../messages/QueryResponse';
import { Group } from '../entities/Group';
export declare class QueryResponseOfGroup extends QueryResponse {
    list: Group[];
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
