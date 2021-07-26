import { HeatmapCell } from '../entities/HeatmapCell';
export declare class HeatmapRow {
    row: number;
    cells: HeatmapCell[];
    constructor(row?: number, cells?: HeatmapCell[]);
}
