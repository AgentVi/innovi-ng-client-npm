import { ApplianceStatusTimeSeries } from '../common/ApplianceStatusTimeSeries';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfApplianceStatusTimeSeries extends EntityResponse {
    entity: ApplianceStatusTimeSeries;
    code: number;
    error: string;
}
