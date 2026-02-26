import { QueryResponse } from '../messages/QueryResponse';
import { ApplianceProfile } from '../entities/ApplianceProfile';
export declare class QueryResponseOfApplianceProfile extends QueryResponse {
    list: ApplianceProfile[];
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
