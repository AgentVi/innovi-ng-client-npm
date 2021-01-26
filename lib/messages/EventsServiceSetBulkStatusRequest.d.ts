import { EventStatusCode } from '../enums/EventStatusCode';
export declare class EventsServiceSetBulkStatusRequest {
    id: string[];
    status: EventStatusCode;
    constructor(id?: string[], status?: EventStatusCode);
}
