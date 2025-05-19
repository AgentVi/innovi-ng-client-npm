import { UserAccountInfo } from '../common/UserAccountInfo';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfUserAccountInfo extends EntityResponse {
    entity: UserAccountInfo;
    code: number;
    error: string;
}
