import { DetectionModel } from '../entities/DetectionModel';
import { EntitiesResponse } from '../messages/EntitiesResponse';
export declare class EntitiesResponseOfDetectionModel extends EntitiesResponse {
    list: DetectionModel[];
    code: number;
    error: string;
}
