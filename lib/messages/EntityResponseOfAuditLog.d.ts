import { AuditLog } from '../entities/AuditLog';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfAuditLog extends EntityResponse {
    entity: AuditLog;
    code: number;
    error: string;
}
