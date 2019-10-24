import { SensorStatusCode } from '../enums/SensorStatusCode';
import { WebSocketMessageHeader } from '../messages/WebSocketMessageHeader';
import { SensorStatusMask } from '../enums/SensorStatusMask';
export declare class SocketSensorStatusNotification extends WebSocketMessageHeader {
    code: number;
    error: string;
    updatedOn: number;
    sensorId: string;
    mask: SensorStatusMask;
    status: SensorStatusCode;
    op: number;
    ver: number;
    id: number;
    cid: number;
    sid: string;
}
