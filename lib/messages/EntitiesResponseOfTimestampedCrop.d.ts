import { EntitiesResponse } from '../messages/EntitiesResponse';
import { TimestampedCrop } from '../common/TimestampedCrop';
export declare class EntitiesResponseOfTimestampedCrop extends EntitiesResponse {
    list: TimestampedCrop[];
    code: number;
    error: string;
}
