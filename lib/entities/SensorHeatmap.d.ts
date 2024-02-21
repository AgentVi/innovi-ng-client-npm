import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { HeatmapRow } from '../entities/HeatmapRow';
import { BaseEntity } from '../entities/BaseEntity';
import { TimeFrame } from '../common/TimeFrame';
export declare class SensorHeatmap extends BaseEntity {
    sessionId: string;
    sensorId: string;
    timeFrame: TimeFrame;
    objectType: ObjectTypeCode[];
    dim: number;
    heatmap: HeatmapRow[];
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
