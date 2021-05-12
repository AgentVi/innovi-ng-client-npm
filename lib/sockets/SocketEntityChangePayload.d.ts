import { BaseEntity } from '../entities/BaseEntity';
export declare class SocketEntityChangePayload {
    op: number;
    sid: string;
    entity: BaseEntity;
    constructor(op?: number, sid?: string, entity?: BaseEntity);
}
