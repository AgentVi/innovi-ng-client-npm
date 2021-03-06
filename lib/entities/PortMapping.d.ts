import { EntityTypeCode } from '../enums/EntityTypeCode';
import { ActiveCode } from '../enums/ActiveCode';
export declare class PortMapping {
    port: string;
    isOutput: boolean;
    entityType: EntityTypeCode;
    entityId: string;
    onHigh: ActiveCode;
    onLow: ActiveCode;
    status: ActiveCode;
    constructor(port?: string, isOutput?: boolean, entityType?: EntityTypeCode, entityId?: string, onHigh?: ActiveCode, onLow?: ActiveCode, status?: ActiveCode);
}
