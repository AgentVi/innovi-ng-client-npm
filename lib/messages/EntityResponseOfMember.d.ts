import { EntityResponse } from '../messages/EntityResponse';
import { Member } from '../entities/Member';
export declare class EntityResponseOfMember extends EntityResponse {
    entity: Member;
    code: number;
    error: string;
}
