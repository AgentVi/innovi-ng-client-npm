import { EventObjectInstance } from '../common/EventObjectInstance';
export declare class EventObjectInfo {
    id: number;
    detection: EventObjectInstance;
    trajectory: EventObjectInstance[];
    constructor(id?: number, detection?: EventObjectInstance, trajectory?: EventObjectInstance[]);
}
