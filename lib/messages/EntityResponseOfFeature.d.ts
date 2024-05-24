import { Feature } from '../entities/Feature';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfFeature extends EntityResponse {
    entity: Feature;
    code: number;
    error: string;
}
