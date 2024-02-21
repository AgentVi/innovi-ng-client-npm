import { SocketEntityChangePayload } from '../sockets/SocketEntityChangePayload';
import { SocketOpCode } from '../enums/SocketOpCode';
export declare class SocketEntityChangeNotification {
    op: SocketOpCode;
    payload: SocketEntityChangePayload;
    constructor(op?: SocketOpCode, payload?: SocketEntityChangePayload);
}
