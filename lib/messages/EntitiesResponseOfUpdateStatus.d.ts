import { UpdateStatus } from '../entities/UpdateStatus';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntitiesResponseOfUpdateStatus extends EntityResponse {
    list: UpdateStatus[];
    code: number;
    error: string;
}
