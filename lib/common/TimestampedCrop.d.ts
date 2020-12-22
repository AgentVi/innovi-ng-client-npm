import { BoundingBox } from '../common/BoundingBox';
export declare class TimestampedCrop {
    objectId: number;
    timestamp: number;
    boundingBox: BoundingBox;
    jpeg: string;
    constructor(objectId?: number, timestamp?: number, boundingBox?: BoundingBox, jpeg?: string);
}
