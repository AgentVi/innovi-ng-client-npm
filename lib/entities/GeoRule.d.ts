import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { RulePolygon } from '../common/RulePolygon';
export declare class GeoRule {
    behaviorType: BehaviorTypeCode;
    dwellTime: number;
    maxObjectsInGroup: number;
    polygon: RulePolygon;
    constructor(behaviorType?: BehaviorTypeCode, dwellTime?: number, maxObjectsInGroup?: number, polygon?: RulePolygon);
}
