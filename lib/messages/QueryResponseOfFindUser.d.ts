import { FindUser } from '../entities/FindUser';
import { QueryResponse } from '../messages/QueryResponse';
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
}
