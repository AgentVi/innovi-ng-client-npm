import { Preset } from '../entities/Preset';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfPreset extends EntityResponse {
    entity: Preset;
    code: number;
    error: string;
}
