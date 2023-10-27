import { ConfigurationTemplate } from '../entities/ConfigurationTemplate';
import { QueryResponse } from '../messages/QueryResponse';
export declare class QueryResponseOfConfigurationTemplate extends QueryResponse {
    list: ConfigurationTemplate[];
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
