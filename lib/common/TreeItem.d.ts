import { SensorStatusCode } from '../enums/SensorStatusCode';
import { TimeFrame } from '../common/TimeFrame';
import { BehaviorTypeCode } from '../enums/BehaviorTypeCode';
import { PermissionMask } from '../enums/PermissionMask';
import { EntityTypeCode } from '../enums/EntityTypeCode';
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
    permissions: PermissionMask;
    constructor(itemId?: string, type?: EntityTypeCode, name?: string, typeName?: string, status?: SensorStatusCode, shunt?: TimeFrame, scheduleId?: string, active?: boolean, behaviorType?: BehaviorTypeCode, permissions?: PermissionMask);
}
