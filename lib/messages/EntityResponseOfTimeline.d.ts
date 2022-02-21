import { Timeline } from '../common/Timeline';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfTimeline extends EntityResponse {
    entity: Timeline;
    code: number;
    error: string;
}
