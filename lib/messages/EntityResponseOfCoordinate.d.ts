import { Coordinate } from '../common/Coordinate';
import { EntityResponse } from '../messages/EntityResponse';
export declare class EntityResponseOfCoordinate extends EntityResponse {
    entity: Coordinate;
    code: number;
    error: string;
}
