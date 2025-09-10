import { PoiUnrecognized } from '../entities/PoiUnrecognized';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfPoiUnrecognized extends EntityResponse {
    entity: PoiUnrecognized;
    code: number;
    error: string;
}
