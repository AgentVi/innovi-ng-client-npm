import { SocketOpCode } from '../enums/SocketOpCode';
import { BaseEntity } from '../entities/BaseEntity';
export declare class SocketEntityChangePayload {
    op: SocketOpCode;
    sid: string;
    entity: BaseEntity;
    constructor(op?: SocketOpCode, sid?: string, entity?: BaseEntity);
}
