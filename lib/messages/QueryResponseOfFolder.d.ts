import { Folder } from '../entities/Folder';
import { QueryResponse } from '../messages/QueryResponse';
export declare class QueryResponseOfFolder extends QueryResponse {
    list: Folder[];
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
