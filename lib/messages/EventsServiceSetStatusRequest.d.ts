import { EventStatusCode } from '../enums/EventStatusCode';
export declare class EventsServiceSetStatusRequest {
    id: string;
    status: EventStatusCode;
    constructor(id?: string, status?: EventStatusCode);
}
