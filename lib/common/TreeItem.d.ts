import { EntityTypeCode } from '../enums/EntityTypeCode';
import { SensorStatusCode } from '../enums/SensorStatusCode';
import { TimeFrame } from '../common/TimeFrame';
export declare class TreeItem {
    itemId: string;
    type: EntityTypeCode;
    name: string;
    typeName: string;
    status: SensorStatusCode;
    shunt: TimeFrame;
    constructor(itemId?: string, type?: EntityTypeCode, name?: string, typeName?: string, status?: SensorStatusCode, shunt?: TimeFrame);
}
