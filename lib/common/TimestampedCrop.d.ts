import { BoundingBox } from '../common/BoundingBox';
export declare class TimestampedCrop {
    timestamp: number;
    boundingBox: BoundingBox;
    jpeg: string;
    constructor(timestamp?: number, boundingBox?: BoundingBox, jpeg?: string);
}
