import { EntitiesResponse } from '../messages/EntitiesResponse';
import { Feature } from '../entities/Feature';
export declare class EntitiesResponseOfFeature extends EntitiesResponse {
    list: Feature[];
    code: number;
    error: string;
}
