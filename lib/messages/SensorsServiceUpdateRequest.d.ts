import { Sensor } from '../entities/Sensor';
export declare class SensorsServiceUpdateRequest {
    id: string;
    body: Sensor;
    constructor(id?: string, body?: Sensor);
}
