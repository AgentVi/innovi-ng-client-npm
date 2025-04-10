import { AuditLog } from '../entities/AuditLog';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfAuditLog extends EntitiesResponse {
    list: AuditLog[];
    code: number;
    error: string;
}
