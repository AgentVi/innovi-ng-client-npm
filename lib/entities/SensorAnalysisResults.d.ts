import { BaseEntity } from '../entities/BaseEntity';
import { AnalysisResult } from '../common/AnalysisResult';
export declare class SensorAnalysisResults extends BaseEntity {
    results: AnalysisResult[];
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
