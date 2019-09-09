import { EventStatusCode } from '../enums/EventStatusCode';
export declare class AnomalyServiceFindEventsRequest {
    accountId: string;
    sensorId: string;
    status: EventStatusCode;
    from: number;
    to: number;
    sort: string;
    page: number;
    pageSize: number;
    constructor(accountId?: string, sensorId?: string, status?: EventStatusCode, from?: number, to?: number, sort?: string, page?: number, pageSize?: number);
}
