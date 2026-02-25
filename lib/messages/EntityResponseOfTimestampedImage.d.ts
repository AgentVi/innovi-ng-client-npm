import { TimestampedImage } from '../common/TimestampedImage';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntityResponseOfTimestampedImage extends EntitiesResponse {
    list: TimestampedImage[];
    code: number;
    error: string;
}
