import { ObjectTypeCode } from '../enums/ObjectTypeCode';
export declare class SensorHeatmapRequest {
    sessionId: string;
    sensorId: string;
    from: number;
    to: number;
    objectType: ObjectTypeCode[];
    dim: number;
    constructor(sessionId?: string, sensorId?: string, from?: number, to?: number, objectType?: ObjectTypeCode[], dim?: number);
}
