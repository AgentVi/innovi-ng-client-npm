import { EventStatusCode } from '../enums/EventStatusCode';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
export declare class EventsServiceExportRequest {
    folderId: string[];
    subFolders: boolean;
    sensorId: string[];
    objectType: ObjectTypeCode[];
    behaviorType: BehaviorTypeCode[];
    severity: SeverityTypeCode[];
    status: EventStatusCode[];
    rule: string[];
    from: number;
    to: number;
    sort: string;
    format: string;
    fields: string[];
    fileName: string;
    constructor(folderId?: string[], subFolders?: boolean, sensorId?: string[], objectType?: ObjectTypeCode[], behaviorType?: BehaviorTypeCode[], severity?: SeverityTypeCode[], status?: EventStatusCode[], rule?: string[], from?: number, to?: number, sort?: string, format?: string, fields?: string[], fileName?: string);
}
