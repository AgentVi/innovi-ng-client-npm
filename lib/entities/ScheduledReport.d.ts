import { BaseEntity } from '../entities/BaseEntity';
export declare class ScheduledReport extends BaseEntity {
    accountId: string;
    reportId: string;
    name: string;
    cron: string;
    targetId: string;
    recipients: string[];
    subject: string;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
