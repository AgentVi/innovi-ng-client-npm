import { StringKeyValue } from '../common/StringKeyValue';
import { BaseEntity } from '../entities/BaseEntity';
export declare class ApiKey extends BaseEntity {
    key: string;
    ttl: number;
    acl: StringKeyValue[];
    version: number;
    isSystemKey: boolean;
    isEnabled: boolean;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
