import { EntityResponse } from '../messages/EntityResponse';
import { ReportDefinition } from '../entities/ReportDefinition';
export declare class EntityResponseOfReportDefinition extends EntityResponse {
    entity: ReportDefinition;
    code: number;
    error: string;
}
