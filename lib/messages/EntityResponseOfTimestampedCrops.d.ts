import { TimestampedCrops } from '../common/TimestampedCrops';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntityResponseOfTimestampedCrops extends EntitiesResponse {
    entity: TimestampedCrops;
    code: number;
    error: string;
}
