import { EntityResponse } from '../messages/EntityResponse';
import { ApplianceKpiTimeSeries } from '../common/ApplianceKpiTimeSeries';
export declare class EntityResponseOfApplianceKpiTimeSeries extends EntityResponse {
    entity: ApplianceKpiTimeSeries;
    code: number;
    error: string;
}
