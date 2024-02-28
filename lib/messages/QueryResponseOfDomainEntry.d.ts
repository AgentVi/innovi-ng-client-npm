import { QueryResponse } from '../messages/QueryResponse';
import { DomainEntry } from '../default/DomainEntry';
export declare class QueryResponseOfDomainEntry extends QueryResponse {
    list: DomainEntry[];
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
