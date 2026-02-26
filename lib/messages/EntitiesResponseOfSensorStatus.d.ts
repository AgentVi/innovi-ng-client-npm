import { EntitiesResponse } from '../messages/EntitiesResponse';
import { SensorStatus } from '../entities/SensorStatus';
export declare class EntitiesResponseOfSensorStatus extends EntitiesResponse {
    list: SensorStatus[];
    code: number;
    error: string;
}
