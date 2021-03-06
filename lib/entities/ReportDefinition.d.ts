import { BaseEntity } from '../entities/BaseEntity';
export declare class ReportDefinition extends BaseEntity {
    accountId: string;
    userId: string;
    name: string;
    tag: string;
    privateReport: boolean;
    reportUrl: string;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
