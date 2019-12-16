import { WebSocketMessageHeader } from '../messages/WebSocketMessageHeader';
import { SensorStatusCode } from '../enums/SensorStatusCode';
export declare class SocketSensorStatusNotification extends WebSocketMessageHeader {
    code: number;
    error: string;
    updatedOn: number;
    sensorId: string;
    mask: number;
    status: SensorStatusCode;
    op: number;
    ver: number;
    id: number;
    cid: number;
    sid: string;
}
