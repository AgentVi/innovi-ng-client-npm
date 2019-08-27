import { SensorStatusCode } from '../enums/SensorStatusCode';
export declare class SensorsServiceChangeStatusRequest {
    id: string;
    status: SensorStatusCode;
    constructor(id?: string, status?: SensorStatusCode);
}
