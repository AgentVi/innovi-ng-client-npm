import { EventCountTimeSeries } from '../common/EventCountTimeSeries';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfEventCountTimeSeries extends EntityResponse {
    entity: EventCountTimeSeries;
    code: number;
    error: string;
}
