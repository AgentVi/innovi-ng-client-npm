import { TimestampedCrop } from '../common/TimestampedCrop';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfTimestampedCrop extends EntitiesResponse {
    list: TimestampedCrop[];
    code: number;
    error: string;
}
