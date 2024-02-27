import { DomainEntity } from '../default/DomainEntity';
import { QueryResponse } from '../messages/QueryResponse';
export declare class QueryResponseOfDomainEntity extends QueryResponse {
    list: DomainEntity[];
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
