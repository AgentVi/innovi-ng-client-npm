import { EventCountDataPoint } from '../common/EventCountDataPoint';
import { TimeUnitCode } from '../enums/TimeUnitCode';
export declare class EventCountTimeSeries {
    label: string;
    interval: TimeUnitCode;
    data: EventCountDataPoint[];
    constructor(label?: string, interval?: TimeUnitCode, data?: EventCountDataPoint[]);
}
