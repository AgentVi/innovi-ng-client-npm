import { ReportDefinition } from '../entities/ReportDefinition';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfReportDefinition extends EntitiesResponse {
    list: ReportDefinition[];
    code: number;
    error: string;
}
