import { SensorAnalysisResults } from '../entities/SensorAnalysisResults';
import { QueryResponse } from '../messages/QueryResponse';
export declare class QueryResponseOfSensorAnalysisResults extends QueryResponse {
    list: SensorAnalysisResults[];
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
