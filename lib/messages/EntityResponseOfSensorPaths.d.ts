import { SensorPaths } from '../entities/SensorPaths';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfSensorPaths extends EntityResponse {
    entity: SensorPaths;
    code: number;
    error: string;
}
