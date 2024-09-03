import { DetectionModel } from '../entities/DetectionModel';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfDetectionModel extends EntityResponse {
    entity: DetectionModel;
    code: number;
    error: string;
}
