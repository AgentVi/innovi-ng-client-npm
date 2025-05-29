import { CaseInfo } from '../entities/CaseInfo';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfCaseInfo extends EntityResponse {
    entity: CaseInfo;
    code: number;
    error: string;
}
