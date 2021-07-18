import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { SearchShape } from '../common/SearchShape';
export declare class SearchBehavior {
    behaviorType: BehaviorTypeCode;
    dwellTime: number;
    minSpeed: number;
    minObjectsInGroup: number;
    clusterDistance: number;
    shapes: SearchShape[];
    constructor(behaviorType?: BehaviorTypeCode, dwellTime?: number, minSpeed?: number, minObjectsInGroup?: number, clusterDistance?: number, shapes?: SearchShape[]);
}
