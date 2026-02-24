import { ObjectTypeCode } from '../enums/ObjectTypeCode';
import { Point } from '../common/Point';
import { ObjectTypeCount } from '../entities/ObjectTypeCount';
export declare class ObjectsPath {
    id: number;
    count: number;
    path: Point[];
    countPerObjectType: ObjectTypeCount[];
    parentClass: ObjectTypeCode;
    constructor(id?: number, count?: number, path?: Point[], countPerObjectType?: ObjectTypeCount[], parentClass?: ObjectTypeCode);
}
