import { InnoviClientConfig } from '../common/InnoviClientConfig';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfInnoviClientConfig extends EntityResponse {
    entity: InnoviClientConfig;
    code: number;
    error: string;
}
