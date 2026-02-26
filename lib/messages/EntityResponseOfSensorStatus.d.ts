import { SensorStatus } from '../entities/SensorStatus';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfSensorStatus extends EntityResponse {
    entity: SensorStatus;
    code: number;
    error: string;
}
