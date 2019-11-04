import { RulePolygon } from '../common/RulePolygon';
import { GeoRule } from '../entities/GeoRule';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
export declare class SensorRule extends GeoRule {
    sensorId: string;
    behaviorType: BehaviorTypeCode;
    dwellTime: number;
    maxObjectsInGroup: number;
    polygon: RulePolygon;
}
