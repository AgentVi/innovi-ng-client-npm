import { EntityResponse } from '../messages/EntityResponse';
import { DetectionModel } from '../entities/DetectionModel';
export declare class EntityResponseOfDetectionModel extends EntityResponse {
    entity: DetectionModel;
    code: number;
    error: string;
}
