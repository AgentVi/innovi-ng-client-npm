import { EntityResponse } from '../messages/EntityResponse';
import { CaseInfo } from '../entities/CaseInfo';
export declare class EntityResponseOfCaseInfo extends EntityResponse {
    entity: CaseInfo;
    code: number;
    error: string;
}
