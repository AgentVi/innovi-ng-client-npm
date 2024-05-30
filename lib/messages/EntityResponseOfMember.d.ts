import { Member } from '../entities/Member';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfMember extends EntityResponse {
    entity: Member;
    code: number;
    error: string;
}
