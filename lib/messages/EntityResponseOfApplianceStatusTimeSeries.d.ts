import { EntityResponse } from '../messages/EntityResponse';
import { ApplianceStatusTimeSeries } from '../common/ApplianceStatusTimeSeries';
export declare class EntityResponseOfApplianceStatusTimeSeries extends EntityResponse {
    entity: ApplianceStatusTimeSeries;
    code: number;
    error: string;
}
