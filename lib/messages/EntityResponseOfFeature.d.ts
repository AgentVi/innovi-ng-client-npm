import { EntityResponse } from '../messages/EntityResponse';
import { Feature } from '../entities/Feature';
export declare class EntityResponseOfFeature extends EntityResponse {
    entity: Feature;
    code: number;
    error: string;
}
