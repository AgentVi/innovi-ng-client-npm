import { License } from '../entities/License';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfLicense extends EntityResponse {
    entity: License;
    code: number;
    error: string;
}
