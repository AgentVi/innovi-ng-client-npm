import { Coordinate } from '../common/Coordinate';
import { HealthThresholds } from '../common/HealthThresholds';
import { BaseEntity } from '../entities/BaseEntity';
export declare class Folder extends BaseEntity {
    parentId: string;
    accountId: string;
    name: string;
    depth: number;
    geoArea: Coordinate[];
    geoLocation: Coordinate;
    timezone: string;
    path: string;
    healthThresholds: HealthThresholds;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
