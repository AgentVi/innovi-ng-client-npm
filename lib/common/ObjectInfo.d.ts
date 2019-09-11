import { ObjectInstance } from '../common/ObjectInstance';
export declare class ObjectInfo {
    objectId: string;
    sensorId: string;
    birthTime: number;
    instances: ObjectInstance[];
    constructor(objectId?: string, sensorId?: string, birthTime?: number, instances?: ObjectInstance[]);
}
