import { ReportFormatCode } from '../enums/ReportFormatCode';
import { ReportDataTypeCode } from '../enums/ReportDataTypeCode';
import { TimeUnitCode } from '../enums/TimeUnitCode';
import { BaseEntity } from '../entities/BaseEntity';
import { ReportTypeCode } from '../enums/ReportTypeCode';
export declare class ScheduledReport extends BaseEntity {
    accountId: string;
    reportId: string;
    name: string;
    cron: string;
    targetId: string;
    recipients: string[];
    subject: string;
    lastSentOn: number;
    userId: string;
    folders: string[];
    sensors: string[];
    reportType: ReportTypeCode;
    reportFormat: ReportFormatCode;
    dataType: ReportDataTypeCode;
    aggregationType: TimeUnitCode;
    timeRange: number;
    surveillanceStartHour: number;
    id: string;
    _type: string;
    createdOn: number;
    updatedOn: number;
    path: string;
}
