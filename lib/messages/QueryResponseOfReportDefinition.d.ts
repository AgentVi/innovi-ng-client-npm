import { QueryResponse } from '../messages/QueryResponse';
import { ReportDefinition } from '../entities/ReportDefinition';
export declare class QueryResponseOfReportDefinition extends QueryResponse {
    list: ReportDefinition[];
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
