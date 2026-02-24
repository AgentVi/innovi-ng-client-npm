import { EntitiesResponse } from '../messages/EntitiesResponse';
import { TimestampedImage } from '../common/TimestampedImage';
export declare class EntityResponseOfTimestampedImage extends EntitiesResponse {
    list: TimestampedImage[];
    code: number;
    error: string;
}
