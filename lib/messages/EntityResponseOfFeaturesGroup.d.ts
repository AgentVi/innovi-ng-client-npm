import { EntityResponse } from '../messages/EntityResponse';
import { FeaturesGroup } from '../entities/FeaturesGroup';
export declare class EntityResponseOfFeaturesGroup extends EntityResponse {
    entity: FeaturesGroup;
    code: number;
    error: string;
}
