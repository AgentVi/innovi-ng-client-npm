import { IntegrationAction } from '../entities/IntegrationAction';
import { QueryResponse } from '../messages/QueryResponse';
export declare class QueryResponseOfIntegrationAction extends QueryResponse {
    list: IntegrationAction[];
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
