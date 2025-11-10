import { EntityResponse } from '../messages/EntityResponse';
import { PoiUnrecognized } from '../entities/PoiUnrecognized';
export declare class EntityResponseOfPoiUnrecognized extends EntityResponse {
    entity: PoiUnrecognized;
    code: number;
    error: string;
}
