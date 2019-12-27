import { AccountSettings } from '../common/AccountSettings';
import { AccountRole } from '../common/AccountRole';
import { FeatureCode } from '../enums/FeatureCode';
import { BaseEntity } from '../entities/BaseEntity';
import { AccountTypeCode } from '../enums/AccountTypeCode';
import { AccountStatusCode } from '../enums/AccountStatusCode';
import { Coordinate } from '../common/Coordinate';
export declare class UserAccountInfo extends BaseEntity {
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
    accountRole: AccountRole;
    features: FeatureCode[];
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
