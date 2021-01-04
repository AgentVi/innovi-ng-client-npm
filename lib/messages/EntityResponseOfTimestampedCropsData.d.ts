import { TimestampedCropsData } from '../common/TimestampedCropsData';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntityResponseOfTimestampedCropsData extends EntitiesResponse {
    entity: TimestampedCropsData;
    code: number;
    error: string;
}
