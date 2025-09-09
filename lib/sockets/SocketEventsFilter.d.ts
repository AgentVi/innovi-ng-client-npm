import { SocketEventsFilterPayload } from '../sockets/SocketEventsFilterPayload';
import { SocketOpCode } from '../enums/SocketOpCode';
export declare class SocketEventsFilter {
    op: SocketOpCode;
    payload: SocketEventsFilterPayload;
    constructor(op?: SocketOpCode, payload?: SocketEventsFilterPayload);
}
