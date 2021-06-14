import { ObjectTypeCount } from '../entities/ObjectTypeCount';
import { Point } from '../common/Point';
export declare class ObjectsPath {
    id: number;
    count: number;
    path: Point[];
    countPerObjectType: ObjectTypeCount[];
    constructor(id?: number, count?: number, path?: Point[], countPerObjectType?: ObjectTypeCount[]);
}
