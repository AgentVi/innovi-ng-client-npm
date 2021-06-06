import { SearchShape } from '../entities/SearchShape';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
export declare class SearchBehavior {
    behaviorType: BehaviorTypeCode;
    dwellTime: number;
    minObjectsInGroup: number;
    clusterDistance: number;
    shapes: SearchShape[];
    constructor(behaviorType?: BehaviorTypeCode, dwellTime?: number, minObjectsInGroup?: number, clusterDistance?: number, shapes?: SearchShape[]);
}
