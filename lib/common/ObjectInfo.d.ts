import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { ColorCode } from '../enums/ColorCode';
import { Coordinate } from '../common/Coordinate';
import { ObjectInstance } from '../common/ObjectInstance';
export declare class ObjectInfo {
    objectId: string;
    sensorId: string;
    objectType: ObjectTypeCode;
    color: ColorCode;
    location: Coordinate;
    instances: ObjectInstance[];
}
