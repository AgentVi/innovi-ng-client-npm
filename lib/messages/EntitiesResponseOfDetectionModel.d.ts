import { EntitiesResponse } from '../messages/EntitiesResponse';
import { DetectionModel } from '../entities/DetectionModel';
export declare class EntitiesResponseOfDetectionModel extends EntitiesResponse {
    list: DetectionModel[];
    code: number;
    error: string;
}
