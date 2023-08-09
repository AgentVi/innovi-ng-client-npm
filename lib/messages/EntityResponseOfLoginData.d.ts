import { EntityResponse } from '../messages/EntityResponse';
import { LoginData } from '../common/LoginData';
export declare class EntityResponseOfLoginData extends EntityResponse {
    entity: LoginData;
    code: number;
    error: string;
}
