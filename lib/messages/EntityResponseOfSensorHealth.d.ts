import { SensorHealth } from '../entities/SensorHealth';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfSensorHealth extends EntityResponse {
    entity: SensorHealth;
    code: number;
    error: string;
}
