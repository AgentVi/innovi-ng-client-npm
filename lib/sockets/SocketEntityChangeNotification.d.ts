import { SocketOpCode } from '../enums/SocketOpCode';
import { SocketEntityChangePayload } from '../sockets/SocketEntityChangePayload';
export declare class SocketEntityChangeNotification {
    op: SocketOpCode;
    payload: SocketEntityChangePayload;
    constructor(op?: SocketOpCode, payload?: SocketEntityChangePayload);
}
