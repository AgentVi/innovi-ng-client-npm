import { TimestampedCrop } from '../common/TimestampedCrop';
export declare class TimestampedCrops {
    sensorId: string;
    bg: string;
    crops: TimestampedCrop[];
    constructor(sensorId?: string, bg?: string, crops?: TimestampedCrop[]);
}
