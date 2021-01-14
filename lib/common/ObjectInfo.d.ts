import { ObjectInstance } from '../common/ObjectInstance';
export declare class ObjectInfo {
    objectId: number;
    sensorId: string;
    accountId: string;
    birthTime: number;
    objectHistory: ObjectInstance[];
    constructor(objectId?: number, sensorId?: string, accountId?: string, birthTime?: number, objectHistory?: ObjectInstance[]);
}
