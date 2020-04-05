import { QueryResponse } from '../messages/QueryResponse';
import { Configuration } from '../entities/Configuration';
export declare class QueryResponseOfConfiguration extends QueryResponse {
    list: Configuration[];
    code: number;
    error: string;
    page: number;
    pageSize: number;
    pages: number;
    total: number;
    queryDef: string;
    docType: string;
}
