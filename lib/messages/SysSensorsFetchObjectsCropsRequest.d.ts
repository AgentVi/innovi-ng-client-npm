import { ObjectTypeCode } from '../enums/ObjectTypeCode';
export declare class SysSensorsFetchObjectsCropsRequest {
    from: number;
    to: number;
    accountId: string[];
    sensorId: string[];
    objectType: ObjectTypeCode[];
    objectId: string[];
    minConf: number;
    maxConf: number;
    bucketFolder: string;
    constructor(from?: number, to?: number, accountId?: string[], sensorId?: string[], objectType?: ObjectTypeCode[], objectId?: string[], minConf?: number, maxConf?: number, bucketFolder?: string);
}
