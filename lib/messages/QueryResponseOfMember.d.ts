import { Member } from '../entities/Member';
import { QueryResponse } from '../messages/QueryResponse';
export declare class QueryResponseOfMember extends QueryResponse {
    list: Member[];
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
