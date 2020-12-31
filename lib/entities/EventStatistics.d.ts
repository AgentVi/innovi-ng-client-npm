import { BaseEntity } from '../entities/BaseEntity';
export declare class EventStatistics extends BaseEntity {
    sampleTime: number;
    eventCount: number;
    anomalyCount: number;
    customCount: number;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
