import { SocketOpCode } from '../enums/SocketOpCode';
import { Event } from '../entities/Event';
export declare class SocketEventNotificationPayload {
    code: SocketOpCode;
    error: string;
    event: Event;
    constructor(code?: SocketOpCode, error?: string, event?: Event);
}
