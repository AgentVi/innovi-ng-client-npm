import { AnomalyEventInfo } from '../common/AnomalyEventInfo';
import { QueryResponse } from '../messages/QueryResponse';
export declare class QueryResponseOfAnomalyEventInfo extends QueryResponse {
    list: AnomalyEventInfo[];
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
