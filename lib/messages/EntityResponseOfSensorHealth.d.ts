import { EntityResponse } from '../messages/EntityResponse';
import { SensorHealth } from '../entities/SensorHealth';
export declare class EntityResponseOfSensorHealth extends EntityResponse {
    entity: SensorHealth;
    code: number;
    error: string;
}
