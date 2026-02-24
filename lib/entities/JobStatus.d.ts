import { JobStatusCode } from '../enums/JobStatusCode';
import { BaseEntity } from '../entities/BaseEntity';
export declare class JobStatus extends BaseEntity {
    accountId: string;
    userId: string;
    status: JobStatusCode;
    error: string;
    mimeType: string;
    destinationsSent: string[];
    createdBySchedule: boolean;
    relatedScheduledReportId: string;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
