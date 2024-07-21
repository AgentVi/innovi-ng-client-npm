import { CaseInfo } from '../entities/CaseInfo';
import { QueryResponse } from '../messages/QueryResponse';
export declare class QueryResponseOfCaseInfo extends QueryResponse {
    list: CaseInfo[];
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
