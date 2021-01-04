import { TimestampedCrop } from '../common/TimestampedCrop';
export declare class TimestampedCropsData {
    sensorId: string;
    bg: string;
    crops: TimestampedCrop[];
    constructor(sensorId?: string, bg?: string, crops?: TimestampedCrop[]);
}
