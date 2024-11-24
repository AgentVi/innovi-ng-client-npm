import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { BoundingBox } from '../common/BoundingBox';
import { EdgeEventObject } from '../common/EdgeEventObject';
import { EdgeEventImage } from '../common/EdgeEventImage';
export declare class EdgeEventInfo {
    behaviorType: BehaviorTypeCode;
    clipPeriod: number;
    description: string;
    eventBboxes: BoundingBox[];
    eventId: string;
    eventImageTime: number;
    eventObjects: EdgeEventObject[];
    eventTime: number;
    eventType: number;
    externalId: string;
    jpegBuffers: EdgeEventImage[];
    objectType: ObjectTypeCode;
    ruleId: string;
    sensorId: string;
    severity: SeverityTypeCode;
    constructor(behaviorType?: BehaviorTypeCode, clipPeriod?: number, description?: string, eventBboxes?: BoundingBox[], eventId?: string, eventImageTime?: number, eventObjects?: EdgeEventObject[], eventTime?: number, eventType?: number, externalId?: string, jpegBuffers?: EdgeEventImage[], objectType?: ObjectTypeCode, ruleId?: string, sensorId?: string, severity?: SeverityTypeCode);
}
