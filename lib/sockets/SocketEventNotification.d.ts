import { WebSocketMessageHeader } from '../messages/WebSocketMessageHeader';
export declare class SocketEventNotification extends WebSocketMessageHeader {
    code: number;
    error: string;
    accountId: string;
    sensorId: string;
    eventId: string;
    op: number;
    ver: number;
    id: number;
    cid: number;
    sid: string;
}
