import { EntityResponse } from '../messages/EntityResponse';
import { SensorPaths } from '../entities/SensorPaths';
export declare class EntityResponseOfSensorPaths extends EntityResponse {
    entity: SensorPaths;
    code: number;
    error: string;
}
