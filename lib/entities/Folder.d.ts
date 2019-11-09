import { BaseEntity } from '../entities/BaseEntity';
import { Coordinate } from '../common/Coordinate';
export declare class Folder extends BaseEntity {
    parentId: string;
    accountId: string;
    name: string;
    depth: number;
    geoArea: Coordinate[];
    geoLocation: Coordinate;
    timezone: string;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
