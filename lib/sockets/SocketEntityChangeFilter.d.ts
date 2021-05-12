import { SocketEntityChangeFilterPayload } from '../sockets/SocketEntityChangeFilterPayload';
export declare class SocketEntityChangeFilter {
    op: number;
    payload: SocketEntityChangeFilterPayload;
    constructor(op?: number, payload?: SocketEntityChangeFilterPayload);
}
