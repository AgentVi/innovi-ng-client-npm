import { EntityResponse } from '../messages/EntityResponse';
import { DigitalIO } from '../entities/DigitalIO';
export declare class EntityResponseOfDigitalIO extends EntityResponse {
    entity: DigitalIO;
    code: number;
    error: string;
}
