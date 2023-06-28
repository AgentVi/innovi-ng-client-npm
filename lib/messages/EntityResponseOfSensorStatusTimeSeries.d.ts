import { EntityResponse } from '../messages/EntityResponse';
import { SensorStatusTimeSeries } from '../common/SensorStatusTimeSeries';
export declare class EntityResponseOfSensorStatusTimeSeries extends EntityResponse {
    entity: SensorStatusTimeSeries;
    code: number;
    error: string;
}
