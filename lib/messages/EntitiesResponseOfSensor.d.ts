import { Sensor } from '../entities/Sensor';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfSensor extends EntitiesResponse {
    list: Sensor[];
    code: number;
    error: string;
}
