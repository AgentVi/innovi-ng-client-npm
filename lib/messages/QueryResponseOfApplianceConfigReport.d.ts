import { QueryResponse } from '../messages/QueryResponse';
import { ApplianceConfigReport } from '../common/ApplianceConfigReport';
export declare class QueryResponseOfApplianceConfigReport extends QueryResponse {
    list: ApplianceConfigReport[];
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
