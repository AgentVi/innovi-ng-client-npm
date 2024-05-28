import { QueryResponse } from '../messages/QueryResponse';
import { ConfigurationVersion } from '../entities/ConfigurationVersion';
export declare class QueryResponseOfConfigurationVersion extends QueryResponse {
    list: ConfigurationVersion[];
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
