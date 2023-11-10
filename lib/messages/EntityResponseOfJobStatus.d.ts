import { EntityResponse } from '../messages/EntityResponse';
import { JobStatus } from '../entities/JobStatus';
export declare class EntityResponseOfJobStatus extends EntityResponse {
    entity: JobStatus;
    code: number;
    error: string;
}
