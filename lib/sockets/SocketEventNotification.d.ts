import { SocketOpCode } from '../enums/SocketOpCode';
import { SocketEventNotificationPayload } from '../sockets/SocketEventNotificationPayload';
export declare class SocketEventNotification {
    op: SocketOpCode;
    payload: SocketEventNotificationPayload;
    constructor(op?: SocketOpCode, payload?: SocketEventNotificationPayload);
}
