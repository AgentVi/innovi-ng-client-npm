import { ScheduledReport } from '../entities/ScheduledReport';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfScheduledReport extends EntityResponse {
    entity: ScheduledReport;
    code: number;
    error: string;
}
