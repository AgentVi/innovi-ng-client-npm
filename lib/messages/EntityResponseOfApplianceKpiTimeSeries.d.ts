import { ApplianceKpiTimeSeries } from '../common/ApplianceKpiTimeSeries';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfApplianceKpiTimeSeries extends EntityResponse {
    entity: ApplianceKpiTimeSeries;
    code: number;
    error: string;
}
