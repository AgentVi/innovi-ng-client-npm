import { EntityResponse } from '../messages/EntityResponse';
import { SensorStatus } from '../entities/SensorStatus';
export declare class EntityResponseOfSensorStatus extends EntityResponse {
    entity: SensorStatus;
    code: number;
    error: string;
}
