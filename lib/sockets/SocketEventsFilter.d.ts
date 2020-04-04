import { SocketEventsFilterPayload } from '../sockets/SocketEventsFilterPayload';
export declare class SocketEventsFilter {
    op: number;
    payload: SocketEventsFilterPayload;
    constructor(op?: number, payload?: SocketEventsFilterPayload);
}
