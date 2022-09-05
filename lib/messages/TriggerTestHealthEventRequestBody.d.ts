import { EntityTypeCode } from '../enums/EntityTypeCode';
export declare class TriggerTestHealthEventRequestBody {
    entityId: string;
    entityType: EntityTypeCode;
    entityState: number;
    constructor(entityId?: string, entityType?: EntityTypeCode, entityState?: number);
}
