import { StringKeyValue } from '../common/StringKeyValue';
import { BaseEntity } from '../entities/BaseEntity';
import { IntegrationTypeCode } from '../enums/IntegrationTypeCode';
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
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
