import { TimeSlot } from '../common/TimeSlot';
export declare class Timeline {
    from: number;
    to: number;
    slots: TimeSlot[];
    constructor(from?: number, to?: number, slots?: TimeSlot[]);
}
