import { EntitiesResponse } from '../messages/EntitiesResponse';
import { SensorHealth } from '../entities/SensorHealth';
export declare class EntitiesResponseOfSensorHealth extends EntitiesResponse {
    list: SensorHealth[];
    code: number;
    error: string;
}
