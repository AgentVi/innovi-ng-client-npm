import { SensorHeatmap } from '../entities/SensorHeatmap';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfSensorHeatmap extends EntityResponse {
    entity: SensorHeatmap;
    code: number;
    error: string;
}
