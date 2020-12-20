import { BaseEntity } from '../entities/BaseEntity';
import { IntegrationTypeCode } from '../enums/IntegrationTypeCode';
import { StringKeyValue } from '../common/StringKeyValue';
export declare class IntegrationTarget extends BaseEntity {
    accountId: string;
    name: string;
    type: IntegrationTypeCode;
    host: string;
    port: string;
    user: string;
    password: string;
    url: string;
    operation: string;
    headers: StringKeyValue[];
    enabled: boolean;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
