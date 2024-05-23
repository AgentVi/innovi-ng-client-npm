import { FeaturesGroup } from '../entities/FeaturesGroup';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfFeaturesGroup extends EntityResponse {
    entity: FeaturesGroup;
    code: number;
    error: string;
}
