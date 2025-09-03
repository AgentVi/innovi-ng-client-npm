import { EntitiesResponse } from '../messages/EntitiesResponse';
import { Poi } from '../entities/Poi';
export declare class EntitiesResponseOfPoi extends EntitiesResponse {
    entities: Poi[];
    code: number;
    error: string;
}
