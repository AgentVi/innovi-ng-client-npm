import { AnalysisResult } from '../common/AnalysisResult';
import { BaseEntity } from '../entities/BaseEntity';
export declare class SensorAnalysisResults extends BaseEntity {
    accountId: string;
    results: AnalysisResult[];
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
