import { Event } from '../entities/Event';
import { SocketOpCode } from '../enums/SocketOpCode';
export declare class SocketEventNotificationPayload {
    code: SocketOpCode;
    error: string;
    event: Event;
    constructor(code?: SocketOpCode, error?: string, event?: Event);
}
