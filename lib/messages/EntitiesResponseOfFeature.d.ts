import { Feature } from '../entities/Feature';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfFeature extends EntitiesResponse {
    list: Feature[];
    code: number;
    error: string;
}
