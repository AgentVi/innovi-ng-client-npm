import { Point } from '../common/Point';
import { Coordinate } from '../common/Coordinate';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { ObjectColor } from '../common/ObjectColor';
import { Dimension } from '../common/Dimension';
import { BoundingBox } from '../common/BoundingBox';
export declare class ObjectInstance {
    objectId: string;
    timestamp: number;
    objectType: ObjectTypeCode;
    colors: ObjectColor[];
    direction: number;
    dimension: Dimension;
    boundingBox: BoundingBox;
    speed: number;
    size: number;
    position: Point;
    location: Coordinate;
    constructor(objectId?: string, timestamp?: number, objectType?: ObjectTypeCode, colors?: ObjectColor[], direction?: number, dimension?: Dimension, boundingBox?: BoundingBox, speed?: number, size?: number, position?: Point, location?: Coordinate);
}
