import { EntityResponse } from '../messages/EntityResponse';
import { InnoviClientConfig } from '../common/InnoviClientConfig';
export declare class EntityResponseOfInnoviClientConfig extends EntityResponse {
    entity: InnoviClientConfig;
    code: number;
    error: string;
}
