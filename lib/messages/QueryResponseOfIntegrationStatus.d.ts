import { IntegrationStatus } from '../entities/IntegrationStatus';
import { QueryResponse } from '../messages/QueryResponse';
export declare class QueryResponseOfIntegrationStatus extends QueryResponse {
    list: IntegrationStatus[];
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
