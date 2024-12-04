import { EntityResponse } from '../messages/EntityResponse';
import { Preset } from '../entities/Preset';
export declare class EntityResponseOfPreset extends EntityResponse {
    entity: Preset;
    code: number;
    error: string;
}
