import { EntityResponse } from '../messages/EntityResponse';
import { Poi } from '../entities/Poi';
export declare class EntityResponseOfPoi extends EntityResponse {
    entity: Poi;
    code: number;
    error: string;
}
