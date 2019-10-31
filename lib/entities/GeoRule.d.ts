import { RulePolygon } from '../common/RulePolygon';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
export declare class GeoRule {
    behaviorType: BehaviorTypeCode;
    dwellTime: number;
    maxObjectsInGroup: number;
    polygon: RulePolygon;
    constructor(behaviorType?: BehaviorTypeCode, dwellTime?: number, maxObjectsInGroup?: number, polygon?: RulePolygon);
}
