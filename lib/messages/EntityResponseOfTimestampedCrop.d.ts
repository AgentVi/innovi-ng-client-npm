import { TimestampedCrop } from '../common/TimestampedCrop';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfTimestampedCrop extends EntityResponse {
    entity: TimestampedCrop;
    code: number;
    error: string;
}
