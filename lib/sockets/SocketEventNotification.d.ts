import { SocketEventNotificationPayload } from '../sockets/SocketEventNotificationPayload';
import { SocketOpCode } from '../enums/SocketOpCode';
export declare class SocketEventNotification {
    op: SocketOpCode;
    payload: SocketEventNotificationPayload;
    constructor(op?: SocketOpCode, payload?: SocketEventNotificationPayload);
}
