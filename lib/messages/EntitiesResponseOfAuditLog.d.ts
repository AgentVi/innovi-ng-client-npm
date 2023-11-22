import { EntitiesResponse } from '../messages/EntitiesResponse';
import { AuditLog } from '../entities/AuditLog';
export declare class EntitiesResponseOfAuditLog extends EntitiesResponse {
    list: AuditLog[];
    code: number;
    error: string;
}
