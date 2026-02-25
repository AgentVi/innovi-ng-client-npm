import { QueryResponse } from '../messages/QueryResponse';
import { CaseInfo } from '../entities/CaseInfo';
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
