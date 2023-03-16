import { SocketOpCode } from '../enums/SocketOpCode';
import { SocketEntityChangeFilterPayload } from '../sockets/SocketEntityChangeFilterPayload';
export declare class SocketEntityChangeFilter {
    op: SocketOpCode;
    payload: SocketEntityChangeFilterPayload;
    constructor(op?: SocketOpCode, payload?: SocketEntityChangeFilterPayload);
}
