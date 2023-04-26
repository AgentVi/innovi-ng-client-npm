import { EntityTypeCode } from '../enums/EntityTypeCode';
import { SensorStatusCode } from '../enums/SensorStatusCode';
import { TimeFrame } from '../common/TimeFrame';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
export declare class TreeItem {
    itemId: string;
    type: EntityTypeCode;
    name: string;
    typeName: string;
    status: SensorStatusCode;
    shunt: TimeFrame;
    scheduleId: string;
    active: boolean;
    behaviorType: BehaviorTypeCode;
    constructor(itemId?: string, type?: EntityTypeCode, name?: string, typeName?: string, status?: SensorStatusCode, shunt?: TimeFrame, scheduleId?: string, active?: boolean, behaviorType?: BehaviorTypeCode);
}
