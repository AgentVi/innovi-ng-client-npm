import { SocketEventNotificationPayload } from '../sockets/SocketEventNotificationPayload';
export declare class SocketEventNotification {
    op: number;
    payload: SocketEventNotificationPayload;
    constructor(op?: number, payload?: SocketEventNotificationPayload);
}
