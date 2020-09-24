import { Coordinate } from '../common/Coordinate';
import { HealthThresholds } from '../common/HealthThresholds';
import { TimeFrame } from '../common/TimeFrame';
import { BaseEntity } from '../entities/BaseEntity';
export declare class Folder extends BaseEntity {
    parentId: string;
    accountId: string;
    name: string;
    externalId: string;
    depth: number;
    path: string;
    geoArea: Coordinate[];
    geoLocation: Coordinate;
    timezone: string;
    healthThresholds: HealthThresholds;
    shunt: TimeFrame;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
