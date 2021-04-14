import { EntityResponse } from '../messages/EntityResponse';
import { SensorHeatmap } from '../entities/SensorHeatmap';
export declare class EntityResponseOfSensorHeatmap extends EntityResponse {
    entity: SensorHeatmap;
    code: number;
    error: string;
}
