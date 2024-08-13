import { LineCrossDirectionCode } from '../enums/LineCrossDirectionCode';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
export declare class ObjectTypeReport {
    objectType: ObjectTypeCode;
    crossingDir: LineCrossDirectionCode;
    count: number;
    avgSpeed: number;
    constructor(objectType?: ObjectTypeCode, crossingDir?: LineCrossDirectionCode, count?: number, avgSpeed?: number);
}
