import { BaseEntity } from '../entities/BaseEntity';
import { SocketOpCode } from '../enums/SocketOpCode';
export declare class SocketEntityChangePayload {
    op: SocketOpCode;
    sid: string;
    entity: BaseEntity;
    constructor(op?: SocketOpCode, sid?: string, entity?: BaseEntity);
}
