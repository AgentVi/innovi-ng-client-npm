import { BaseEntity } from '../entities/BaseEntity';
export declare class ReportDefinition extends BaseEntity {
    accountId: string;
    userId: string;
    name: string;
    tag: string;
    privateReport: boolean;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
}
