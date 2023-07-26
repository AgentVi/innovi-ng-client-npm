import { Group } from '../entities/Group';
import { QueryResponse } from '../messages/QueryResponse';
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
}
