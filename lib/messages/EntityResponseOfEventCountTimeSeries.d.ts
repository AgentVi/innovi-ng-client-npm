import { EntityResponse } from '../messages/EntityResponse';
import { EventCountTimeSeries } from '../common/EventCountTimeSeries';
export declare class EntityResponseOfEventCountTimeSeries extends EntityResponse {
    entity: EventCountTimeSeries;
    code: number;
    error: string;
}
