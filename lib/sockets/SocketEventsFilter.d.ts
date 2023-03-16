import { SocketOpCode } from '../enums/SocketOpCode';
import { SocketEventsFilterPayload } from '../sockets/SocketEventsFilterPayload';
export declare class SocketEventsFilter {
    op: SocketOpCode;
    payload: SocketEventsFilterPayload;
    constructor(op?: SocketOpCode, payload?: SocketEventsFilterPayload);
}
