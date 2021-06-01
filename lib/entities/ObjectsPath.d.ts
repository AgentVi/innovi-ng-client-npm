import { Point } from '../common/Point';
import { ObjectTypeCount } from '../entities/ObjectTypeCount';
export declare class ObjectsPath {
    pathId: number;
    count: number;
    path: Point[];
    countPerObjectType: ObjectTypeCount[];
    constructor(pathId?: number, count?: number, path?: Point[], countPerObjectType?: ObjectTypeCount[]);
}
