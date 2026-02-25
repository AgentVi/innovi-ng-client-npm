import { DigitalIO } from '../entities/DigitalIO';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfDigitalIO extends EntityResponse {
    entity: DigitalIO;
    code: number;
    error: string;
}
