import { ObjectInstance } from '../common/ObjectInstance';
export declare class ObjectInfo {
    objectId: number;
    sensorId: string;
    birthTime: number;
    instances: ObjectInstance[];
    constructor(objectId?: number, sensorId?: string, birthTime?: number, instances?: ObjectInstance[]);
}
