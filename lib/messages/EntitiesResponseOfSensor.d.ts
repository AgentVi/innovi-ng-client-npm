import { EntitiesResponse } from '../messages/EntitiesResponse';
import { Sensor } from '../entities/Sensor';
export declare class EntitiesResponseOfSensor extends EntitiesResponse {
    list: Sensor[];
    code: number;
    error: string;
}
