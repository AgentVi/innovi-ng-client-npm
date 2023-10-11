import { ComponentConfiguration } from '../entities/ComponentConfiguration';
import { QueryResponse } from '../messages/QueryResponse';
export declare class QueryResponseOfComponentConfiguration extends QueryResponse {
    list: ComponentConfiguration[];
    code: number;
    error: string;
    page: number;
    pageSize: number;
    pages: number;
    total: number;
    queryDef: string;
    docType: string;
}
