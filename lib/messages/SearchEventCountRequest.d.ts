import { TimeUnitCode } from '../enums/TimeUnitCode';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
export declare class SearchEventCountRequest {
    sessionId: string;
    sensorId: string[];
    objectType: ObjectTypeCode[];
    from: number;
    to: number;
    interval: TimeUnitCode;
    labelFormat: string;
    constructor(sessionId?: string, sensorId?: string[], objectType?: ObjectTypeCode[], from?: number, to?: number, interval?: TimeUnitCode, labelFormat?: string);
}
