import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { EventStatusCode } from '../enums/EventStatusCode';
import { Coordinate } from '../common/Coordinate';
import { SeverityTypeCode } from '../enums/SeverityTypeCode';
import { ObjectInfo } from '../common/ObjectInfo';
import { BaseEntity } from '../entities/BaseEntity';
import { RuleTypeCode } from '../enums/RuleTypeCode';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
export declare class Event extends BaseEntity {
    sensorId: string;
    accountId: string;
    eventTime: number;
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
    imageTime: number;
    eventObjects: ObjectInfo[];
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
