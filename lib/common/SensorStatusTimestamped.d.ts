import { SensorStatusMask } from '../enums/SensorStatusMask';
export declare class SensorStatusTimestamped {
    mask: SensorStatusMask;
    timestamp: number;
    label: string;
    constructor(mask?: SensorStatusMask, timestamp?: number, label?: string);
}
