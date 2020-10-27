import { EntityTypeCode } from '../enums/EntityTypeCode';
export declare class PortMapping {
    port: string;
    isOutput: boolean;
    entityType: EntityTypeCode;
    entityId: string;
    activate: boolean;
    enabled: boolean;
    isActive: boolean;
    constructor(port?: string, isOutput?: boolean, entityType?: EntityTypeCode, entityId?: string, activate?: boolean, enabled?: boolean, isActive?: boolean);
}
