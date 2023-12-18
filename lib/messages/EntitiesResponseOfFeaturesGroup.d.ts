import { FeaturesGroup } from '../entities/FeaturesGroup';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfFeaturesGroup extends EntitiesResponse {
    list: FeaturesGroup[];
    code: number;
    error: string;
}
