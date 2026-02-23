import { EntitiesResponse } from '../messages/EntitiesResponse';
import { ReportDefinition } from '../entities/ReportDefinition';
export declare class EntitiesResponseOfReportDefinition extends EntitiesResponse {
    list: ReportDefinition[];
    code: number;
    error: string;
}
