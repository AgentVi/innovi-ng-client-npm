import { ObjectInstance } from '../common/ObjectInstance';
import { BoundingBox } from '../common/BoundingBox';
export declare class SearchResultObject {
    objectId: number;
    sensorId: string;
    boundingBox: BoundingBox;
    objectHistory: ObjectInstance[];
    constructor(objectId?: number, sensorId?: string, boundingBox?: BoundingBox, objectHistory?: ObjectInstance[]);
}
