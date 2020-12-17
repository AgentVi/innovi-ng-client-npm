import { TimestampedCrop } from '../common/TimestampedCrop';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntityResponseOfTimestampedCrop extends EntitiesResponse {
    list: TimestampedCrop[];
    code: number;
    error: string;
}
