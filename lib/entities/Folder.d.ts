import { BaseEntity } from '../entities/BaseEntity';
import { Coordinate } from '../common/Coordinate';
import { HealthThresholds } from '../common/HealthThresholds';
import { TimeFrame } from '../common/TimeFrame';
export declare class Folder extends BaseEntity {
    parentId: string;
    accountId: string;
    name: string;
    externalId: string;
    depth: number;
    geoArea: Coordinate[];
    geoLocation: Coordinate;
    timezone: string;
    healthThresholds: HealthThresholds;
    shunt: TimeFrame;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
