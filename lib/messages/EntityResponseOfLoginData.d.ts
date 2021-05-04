import { LoginData } from '../common/LoginData';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfLoginData extends EntityResponse {
    entity: LoginData;
    code: number;
    error: string;
}
