import { JobStatus } from '../entities/JobStatus';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfJobStatus extends EntityResponse {
    entity: JobStatus;
    code: number;
    error: string;
}
