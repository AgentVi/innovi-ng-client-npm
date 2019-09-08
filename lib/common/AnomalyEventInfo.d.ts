import { EventStatusCode } from '../enums/EventStatusCode';
export declare class AnomalyEventInfo {
    eventId: string;
    objectIds: number[];
    status: EventStatusCode;
    constructor(eventId?: string, objectIds?: number[], status?: EventStatusCode);
}
