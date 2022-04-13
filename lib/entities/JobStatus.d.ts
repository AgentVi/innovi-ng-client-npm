import { BaseEntity } from '../entities/BaseEntity';
import { JobStatusCode } from '../enums/JobStatusCode';
export declare class JobStatus extends BaseEntity {
    accountId: string;
    userId: string;
    status: JobStatusCode;
    error: string;
    mimeType: string;
    destinationsSent: string[];
    createdBySchedule: boolean;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
