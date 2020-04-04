import { SocketHealthStatusNotificationPayload } from '../sockets/SocketHealthStatusNotificationPayload';
export declare class SocketEventNotification {
    op: number;
    payload: SocketHealthStatusNotificationPayload;
    constructor(op?: number, payload?: SocketHealthStatusNotificationPayload);
}
