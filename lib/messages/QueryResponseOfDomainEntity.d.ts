import { QueryResponse } from '../messages/QueryResponse';
import { DomainEntity } from '../default/DomainEntity';
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
