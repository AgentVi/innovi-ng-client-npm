import { IntegrationTypeCode } from '../enums/IntegrationTypeCode';
import { StringKeyValue } from '../common/StringKeyValue';
import { BaseEntity } from '../entities/BaseEntity';
export declare class IntegrationTarget extends BaseEntity {
    accountId: string;
    name: string;
    type: IntegrationTypeCode;
    protocol: string;
    operation: string;
    host: string;
    port: number;
    user: string;
    password: string;
    url: string;
    headers: StringKeyValue[];
    recipients: string[];
    subject: string;
    body: string;
    clipRequired: boolean;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
