import { BaseEntity } from '../entities/BaseEntity';
export declare class IntegrationAction extends BaseEntity {
    accountId: string;
    folderId: string;
    name: string;
    targetId: string;
    recipients: string[];
    subject: string;
    body: string;
    mimeType: string;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
