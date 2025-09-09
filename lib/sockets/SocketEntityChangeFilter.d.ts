import { SocketEntityChangeFilterPayload } from '../sockets/SocketEntityChangeFilterPayload';
import { SocketOpCode } from '../enums/SocketOpCode';
export declare class SocketEntityChangeFilter {
    op: SocketOpCode;
    payload: SocketEntityChangeFilterPayload;
    constructor(op?: SocketOpCode, payload?: SocketEntityChangeFilterPayload);
}
