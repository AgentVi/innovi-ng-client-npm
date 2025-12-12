import { Poi } from '../entities/Poi';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfPoi extends EntityResponse {
    entity: Poi;
    code: number;
    error: string;
}
