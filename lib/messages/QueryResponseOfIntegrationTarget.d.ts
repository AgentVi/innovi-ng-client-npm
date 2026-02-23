import { IntegrationTarget } from '../entities/IntegrationTarget';
import { QueryResponse } from '../messages/QueryResponse';
export declare class QueryResponseOfIntegrationTarget extends QueryResponse {
    list: IntegrationTarget[];
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
