import { EntityResponse } from '../messages/EntityResponse';
import { AuditLog } from '../entities/AuditLog';
export declare class EntityResponseOfAuditLog extends EntityResponse {
    entity: AuditLog;
    code: number;
    error: string;
}
