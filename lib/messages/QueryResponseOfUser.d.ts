import { QueryResponse } from '../messages/QueryResponse';
import { User } from '../entities/User';
export declare class QueryResponseOfUser extends QueryResponse {
    list: User[];
    code: number;
    error: string;
    page: number;
    pageSize: number;
    pages: number;
    total: number;
    queryDef: string;
    docType: string;
}
