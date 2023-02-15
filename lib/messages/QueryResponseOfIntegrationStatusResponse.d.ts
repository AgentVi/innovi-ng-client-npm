import { IntegrationStatusResponse } from '../responses/IntegrationStatusResponse';
import { QueryResponse } from '../messages/QueryResponse';
export declare class QueryResponseOfIntegrationStatusResponse extends QueryResponse {
    list: IntegrationStatusResponse[];
    code: number;
    error: string;
    page: number;
    pageSize: number;
    pages: number;
    total: number;
    queryDef: string;
    docType: string;
}
