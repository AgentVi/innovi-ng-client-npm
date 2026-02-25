import { Appliance } from '../entities/Appliance';
import { QueryResponse } from '../messages/QueryResponse';
export declare class QueryResponseOfAppliance extends QueryResponse {
    list: Appliance[];
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
