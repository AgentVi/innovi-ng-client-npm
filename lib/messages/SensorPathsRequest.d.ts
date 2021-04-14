import { ObjectTypeCode } from '../enums/ObjectTypeCode';
export declare class SensorPathsRequest {
    sessionId: string;
    sensorId: string;
    from: number;
    to: number;
    objectType: ObjectTypeCode[];
    points: number;
    constructor(sessionId?: string, sensorId?: string, from?: number, to?: number, objectType?: ObjectTypeCode[], points?: number);
}
