import { EntityResponse } from '../messages/EntityResponse';
import { Coordinate } from '../common/Coordinate';
export declare class EntityResponseOfCoordinate extends EntityResponse {
    entity: Coordinate;
    code: number;
    error: string;
}
