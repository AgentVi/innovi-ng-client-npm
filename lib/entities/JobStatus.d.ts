import { BaseEntity } from '../entities/BaseEntity';
import { JobStatusCode } from '../enums/JobStatusCode';
export declare class JobStatus extends BaseEntity {
    status: JobStatusCode;
    error: string;
    mimeType: string;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
