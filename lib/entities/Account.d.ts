import { AccountSettings } from '../common/AccountSettings';
import { HealthThresholds } from '../common/HealthThresholds';
import { BaseEntity } from '../entities/BaseEntity';
import { AccountTypeCode } from '../enums/AccountTypeCode';
import { AccountStatusCode } from '../enums/AccountStatusCode';
import { Coordinate } from '../common/Coordinate';
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
    maxChannels: number;
    description: string;
    settings: AccountSettings;
    healthThresholds: HealthThresholds;
    sysAdminSupport: boolean;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
