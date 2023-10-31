import { ReportDefinition } from '../entities/ReportDefinition';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfReportDefinition extends EntityResponse {
    entity: ReportDefinition;
    code: number;
    error: string;
}
