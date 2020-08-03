import { ObjectInstance } from '../common/ObjectInstance';
export declare class EdgeMetadata {
    accountId: string;
    sensorId: string;
    objects: ObjectInstance[];
    constructor(accountId?: string, sensorId?: string, objects?: ObjectInstance[]);
}
