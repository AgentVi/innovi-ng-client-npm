import { EntityResponse } from '../messages/EntityResponse';
import { SensorAnomalyInfo } from '../common/SensorAnomalyInfo';
export declare class EntityResponseOfSensorAnomalyInfo extends EntityResponse {
    entity: SensorAnomalyInfo;
    code: number;
    error: string;
}
