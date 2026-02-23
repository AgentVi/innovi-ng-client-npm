import { Sensor } from '../entities/Sensor';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfSensor extends EntityResponse {
    entity: Sensor;
    code: number;
    error: string;
}
