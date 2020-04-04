import { Event } from '../entities/Event';
export declare class SocketEventNotificationPayload {
    code: number;
    error: string;
    event: Event;
    constructor(code?: number, error?: string, event?: Event);
}
