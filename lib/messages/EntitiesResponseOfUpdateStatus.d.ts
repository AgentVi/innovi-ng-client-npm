import { EntityResponse } from '../messages/EntityResponse';
import { UpdateStatus } from '../entities/UpdateStatus';
export declare class EntitiesResponseOfUpdateStatus extends EntityResponse {
    list: UpdateStatus[];
    code: number;
    error: string;
}
