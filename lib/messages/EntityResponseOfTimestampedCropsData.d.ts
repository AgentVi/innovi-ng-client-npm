import { EntitiesResponse } from '../messages/EntitiesResponse';
import { TimestampedCropsData } from '../common/TimestampedCropsData';
export declare class EntityResponseOfTimestampedCropsData extends EntitiesResponse {
    entity: TimestampedCropsData;
    code: number;
    error: string;
}
