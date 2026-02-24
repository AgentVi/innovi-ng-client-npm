import { EntityResponse } from '../messages/EntityResponse';
import { ScheduledReport } from '../entities/ScheduledReport';
export declare class EntityResponseOfScheduledReport extends EntityResponse {
    entity: ScheduledReport;
    code: number;
    error: string;
}
