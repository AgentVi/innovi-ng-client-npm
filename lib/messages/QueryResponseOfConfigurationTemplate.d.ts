import { QueryResponse } from '../messages/QueryResponse';
import { ConfigurationTemplate } from '../entities/ConfigurationTemplate';
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
}
