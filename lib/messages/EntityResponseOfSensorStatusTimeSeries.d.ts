import { SensorStatusTimeSeries } from '../common/SensorStatusTimeSeries';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfSensorStatusTimeSeries extends EntityResponse {
    entity: SensorStatusTimeSeries;
    code: number;
    error: string;
}
