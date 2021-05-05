import { Member } from '../entities/Member';
export declare class MembersServiceUpdateRequest {
    id: string;
    body: Member;
    constructor(id?: string, body?: Member);
}
