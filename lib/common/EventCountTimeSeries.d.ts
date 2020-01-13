import { TimeUnitCode } from '../enums/TimeUnitCode';
import { EventCountDataPoint } from '../common/EventCountDataPoint';
export declare class EventCountTimeSeries {
    label: string;
    interval: TimeUnitCode;
    data: EventCountDataPoint[];
    constructor(label?: string, interval?: TimeUnitCode, data?: EventCountDataPoint[]);
}
