import { EntityResponse } from '../messages/EntityResponse';
import { UsageReport } from '../entities/UsageReport';
export declare class EntityResponseUsageReport extends EntityResponse {
    entity: UsageReport;
    code: number;
    error: string;
}
