import { SensorAnomalyInfo } from '../common/SensorAnomalyInfo';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfSensorAnomalyInfo extends EntityResponse {
    entity: SensorAnomalyInfo;
    code: number;
    error: string;
}
