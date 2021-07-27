import { ObjectCount } from '../entities/ObjectCount';
export declare class HeatmapCell {
    col: number;
    objectsCount: ObjectCount[];
    constructor(col?: number, objectsCount?: ObjectCount[]);
}
