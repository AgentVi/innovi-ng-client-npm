import { Point } from '../common/Point';
import { ObjectTypeCount } from '../entities/ObjectTypeCount';
import { ObjectTypeCode } from '../enums/ObjectTypeCode';
export declare class ObjectsPath {
    id: number;
    count: number;
    path: Point[];
    countPerObjectType: ObjectTypeCount[];
    parentObjectType: ObjectTypeCode;
    constructor(id?: number, count?: number, path?: Point[], countPerObjectType?: ObjectTypeCount[], parentObjectType?: ObjectTypeCode);
}
