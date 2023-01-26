import { QueryResponse } from '../messages/QueryResponse';
import { HealthEvent } from '../entities/HealthEvent';
export declare class QueryResponseOfHealthEvent extends QueryResponse {
    list: HealthEvent[];
    code: number;
    error: string;
    page: number;
    pageSize: number;
    pages: number;
    total: number;
    queryDef: string;
    docType: string;
}
