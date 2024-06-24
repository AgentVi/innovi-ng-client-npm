import { EntityResponse } from '../messages/EntityResponse';
import { Sensor } from '../entities/Sensor';
export declare class EntityResponseOfSensor extends EntityResponse {
    entity: Sensor;
    code: number;
    error: string;
}
