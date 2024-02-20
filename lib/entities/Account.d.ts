import { AccountStatusCode } from '../enums/AccountStatusCode';
import { Coordinate } from '../common/Coordinate';
import { HealthThresholds } from '../common/HealthThresholds';
import { PlatformTypeCode } from '../enums/PlatformTypeCode';
import { BaseEntity } from '../entities/BaseEntity';
import { AccountTypeCode } from '../enums/AccountTypeCode';
export declare class Account extends BaseEntity {
    name: string;
    key: string;
    type: AccountTypeCode;
    status: AccountStatusCode;
    suspendedOn: number;
    groups: string[];
    geoArea: Coordinate[];
    geoLocation: Coordinate;
    timezone: string;
    expiredOn: number;
    description: string;
    healthThresholds: HealthThresholds;
    sysAdminSupport: boolean;
    platformType: PlatformTypeCode;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
