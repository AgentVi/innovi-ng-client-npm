import { TimeFrame } from '../common/TimeFrame';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { ObjectsPath } from '../entities/ObjectsPath';
import { BaseEntity } from '../entities/BaseEntity';
export declare class SensorPaths extends BaseEntity {
    sessionId: string;
    sensorId: string;
    timeFrame: TimeFrame;
    objectType: ObjectTypeCode[];
    dim: number;
    paths: ObjectsPath[];
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
