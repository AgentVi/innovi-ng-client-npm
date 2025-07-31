import { UsageReport } from '../entities/UsageReport';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseUsageReport extends EntityResponse {
    entity: UsageReport;
    code: number;
    error: string;
}
