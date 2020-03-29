import { SensorStatus } from '../entities/SensorStatus';
import { WebSocketMessageHeader } from '../messages/WebSocketMessageHeader';
export declare class SocketHealthStatusNotification extends WebSocketMessageHeader {
    code: number;
    error: string;
    sensorStatus: SensorStatus;
    op: number;
    ver: number;
    id: number;
    cid: number;
    sid: string;
}
