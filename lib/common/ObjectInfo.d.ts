import { ObjectInstance } from '../common/ObjectInstance';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { ColorCode } from '../enums/ColorCode';
import { Coordinate } from '../common/Coordinate';
export declare class ObjectInfo {
    objectId: string;
    sensorId: string;
    objectType: ObjectTypeCode;
    color: ColorCode;
    location: Coordinate;
    instances: ObjectInstance[];
    constructor(objectId?: string, sensorId?: string, objectType?: ObjectTypeCode, color?: ColorCode, location?: Coordinate, instances?: ObjectInstance[]);
}
