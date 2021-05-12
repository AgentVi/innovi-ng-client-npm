import { SocketEntityChangePayload } from '../sockets/SocketEntityChangePayload';
export declare class SocketEntityChangeNotification {
    op: number;
    payload: SocketEntityChangePayload;
    constructor(op?: number, payload?: SocketEntityChangePayload);
}
