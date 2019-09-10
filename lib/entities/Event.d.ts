import { Coordinate } from '../common/Coordinate';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { EventObjectInfo } from '../common/EventObjectInfo';
import { BaseEntity } from '../entities/BaseEntity';
import { RuleTypeCode } from '../enums/RuleTypeCode';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { EventStatusCode } from '../enums/EventStatusCode';
export declare class Event extends BaseEntity {
    sensorId: string;
    accountId: string;
    startTime: number;
    ruleId: string;
    description: string;
    ruleType: RuleTypeCode;
    objectType: ObjectTypeCode;
    behaviorType: BehaviorTypeCode;
    status: EventStatusCode;
    geoLocation: Coordinate;
    imagePath: string;
    clipPath: string;
    severity: SeverityTypeCode;
    objectsInfo: EventObjectInfo[];
    imageTime: number;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
