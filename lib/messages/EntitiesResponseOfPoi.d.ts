import { Poi } from '../entities/Poi';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfPoi extends EntitiesResponse {
    entities: Poi[];
    code: number;
    error: string;
}
