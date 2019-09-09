import { SensorAnomalyRuleInfo } from '../common/SensorAnomalyRuleInfo';
export declare class AnomalyServiceUpdateRuleRequest {
    sensorId: string;
    body: SensorAnomalyRuleInfo;
    constructor(sensorId?: string, body?: SensorAnomalyRuleInfo);
}
