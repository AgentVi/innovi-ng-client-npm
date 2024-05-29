import { EntitiesResponse } from '../messages/EntitiesResponse';
import { FeaturesGroup } from '../entities/FeaturesGroup';
export declare class EntitiesResponseOfFeaturesGroup extends EntitiesResponse {
    list: FeaturesGroup[];
    code: number;
    error: string;
}
