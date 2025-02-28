import { SensorStatus } from '../entities/SensorStatus';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfSensorStatus extends EntitiesResponse {
    list: SensorStatus[];
    code: number;
    error: string;
}
