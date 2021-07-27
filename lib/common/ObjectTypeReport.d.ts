import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { LineCrossDirectionCode } from '../enums/LineCrossDirectionCode';
export declare class ObjectTypeReport {
    objectType: ObjectTypeCode;
    crossingDir: LineCrossDirectionCode;
    count: number;
    avgSpeed: number;
    constructor(objectType?: ObjectTypeCode, crossingDir?: LineCrossDirectionCode, count?: number, avgSpeed?: number);
}
