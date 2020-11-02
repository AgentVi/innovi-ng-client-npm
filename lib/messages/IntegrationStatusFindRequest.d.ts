import { EntityTypeCode } from '../enums/EntityTypeCode';
export declare class IntegrationStatusFindRequest {
    source: EntityTypeCode;
    entityId: string;
    integrationTargetId: string;
    integrationActionId: string;
    constructor(source?: EntityTypeCode, entityId?: string, integrationTargetId?: string, integrationActionId?: string);
}
