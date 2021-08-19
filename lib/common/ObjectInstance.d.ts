import { BoundingBox } from '../common/BoundingBox';
import { Point } from '../common/Point';
import { Coordinate } from '../common/Coordinate';
import { ExtendedModelResults } from '../common/ExtendedModelResults';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { ObjectColor } from '../common/ObjectColor';
import { Dimension } from '../common/Dimension';
export declare class ObjectInstance {
    timestamp: number;
    objectType: ObjectTypeCode;
    confidence: number;
    isStopped: boolean;
    colors: ObjectColor[];
    direction: number;
    dimension: Dimension;
    boundingBox: BoundingBox;
    speed: number;
    size: number;
    position: Point;
    location: Coordinate;
    extendedModelResults: ExtendedModelResults;
    constructor(timestamp?: number, objectType?: ObjectTypeCode, confidence?: number, isStopped?: boolean, colors?: ObjectColor[], direction?: number, dimension?: Dimension, boundingBox?: BoundingBox, speed?: number, size?: number, position?: Point, location?: Coordinate, extendedModelResults?: ExtendedModelResults);
}
