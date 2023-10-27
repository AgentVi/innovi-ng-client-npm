import { Sensor } from '../entities/Sensor';
import { QueryResponse } from '../messages/QueryResponse';
export declare class QueryResponseOfSensor extends QueryResponse {
    list: Sensor[];
    code: number;
    error: string;
    page: number;
    pageSize: number;
    pages: number;
    total: number;
    queryDef: string;
    docType: string;
}
