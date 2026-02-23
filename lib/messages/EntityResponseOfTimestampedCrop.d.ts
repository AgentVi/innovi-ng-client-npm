import { EntityResponse } from '../messages/EntityResponse';
import { TimestampedCrop } from '../common/TimestampedCrop';
export declare class EntityResponseOfTimestampedCrop extends EntityResponse {
    entity: TimestampedCrop;
    code: number;
    error: string;
}
