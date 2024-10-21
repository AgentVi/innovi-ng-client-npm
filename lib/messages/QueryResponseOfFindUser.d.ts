import { QueryResponse } from '../messages/QueryResponse';
import { FindUser } from '../entities/FindUser';
export declare class QueryResponseOfFindUser extends QueryResponse {
    list: FindUser[];
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
