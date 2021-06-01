import { TimeFrame } from '../common/TimeFrame';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { BaseEntity } from '../entities/BaseEntity';
export declare class SensorHeatmap extends BaseEntity {
    sessionId: string;
    sensorId: string;
    timeFrame: TimeFrame;
    objectType: ObjectTypeCode[];
    dim: number;
    heatmap: number[];
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
