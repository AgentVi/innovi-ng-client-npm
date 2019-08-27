import { EventCountDataPoint } from '../common/EventCountDataPoint';
export declare class EventCountTimeSeries {
    label: string;
    data: EventCountDataPoint[];
    constructor(label?: string, data?: EventCountDataPoint[]);
}
