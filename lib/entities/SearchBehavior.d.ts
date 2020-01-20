import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { SearchShape } from '../entities/SearchShape';
export declare class SearchBehavior {
    behaviorType: BehaviorTypeCode;
    dwellTime: number;
    minObjectsInGroup: number;
    shapes: SearchShape[];
    constructor(behaviorType?: BehaviorTypeCode, dwellTime?: number, minObjectsInGroup?: number, shapes?: SearchShape[]);
}
