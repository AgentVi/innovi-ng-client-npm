import { BoundingBox } from '../common/BoundingBox';
import { ObjectInstance } from '../common/ObjectInstance';
export declare class SearchResultObject {
    objectId: number;
    sensorId: string;
    boundingBox: BoundingBox;
    objectHistory: ObjectInstance[];
    constructor(objectId?: number, sensorId?: string, boundingBox?: BoundingBox, objectHistory?: ObjectInstance[]);
}
