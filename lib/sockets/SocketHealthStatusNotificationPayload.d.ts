import { SensorStatus } from '../entities/SensorStatus';
export declare class SocketHealthStatusNotificationPayload {
    code: number;
    error: string;
    sensorStatus: SensorStatus;
    constructor(code?: number, error?: string, sensorStatus?: SensorStatus);
}
