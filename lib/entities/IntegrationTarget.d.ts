import { StringKeyValue } from '../common/StringKeyValue';
import { BaseEntity } from '../entities/BaseEntity';
export declare class IntegrationTarget extends BaseEntity {
    accountId: string;
    name: string;
    uri: string;
    operation: string;
    headers: StringKeyValue[];
    recipients: string[];
    subject: string;
    body: string;
    mimeType: string;
    clipRequired: boolean;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
