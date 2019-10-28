import { SensorHealth } from '../entities/SensorHealth';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfSensorHealth extends EntitiesResponse {
    list: SensorHealth[];
    code: number;
    error: string;
}
