import { Point } from '../common/Point';
import { ObjectTypeCount } from '../entities/ObjectTypeCount';
export declare class ObjectsPath {
    id: number;
    count: number;
    path: Point[];
    countPerObjectType: ObjectTypeCount[];
    constructor(id?: number, count?: number, path?: Point[], countPerObjectType?: ObjectTypeCount[]);
}
