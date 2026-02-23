import { EntityResponse } from '../messages/EntityResponse';
import { Timeline } from '../common/Timeline';
export declare class EntityResponseOfTimeline extends EntityResponse {
    entity: Timeline;
    code: number;
    error: string;
}
