import { EntityResponse } from '../messages/EntityResponse';
import { License } from '../entities/License';
export declare class EntityResponseOfLicense extends EntityResponse {
    entity: License;
    code: number;
    error: string;
}
