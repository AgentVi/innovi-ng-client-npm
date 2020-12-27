import { EntitiesResponse } from '../messages/EntitiesResponse';
import { TimestampedCrops } from '../common/TimestampedCrops';
export declare class EntityResponseOfTimestampedCrops extends EntitiesResponse {
    entity: TimestampedCrops;
    code: number;
    error: string;
}
