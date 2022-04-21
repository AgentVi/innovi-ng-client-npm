import { ReportDataTypeCode } from '../enums/ReportDataTypeCode';
import { ReportFormatCode } from '../enums/ReportFormatCode';
import { ReportTypeCode } from '../enums/ReportTypeCode';
import { TimeUnitCode } from '../enums/TimeUnitCode';
export declare class ReportGenerationRequest {
    sensorId: string[];
    folderId: string[];
    from: string;
    to: string;
    reportType: ReportTypeCode;
    aggregationType: TimeUnitCode;
    dataType: ReportDataTypeCode;
    reportFormat: ReportFormatCode;
    surveillanceStartHour: number;
    constructor(sensorId?: string[], folderId?: string[], from?: string, to?: string, reportType?: ReportTypeCode, aggregationType?: TimeUnitCode, dataType?: ReportDataTypeCode, reportFormat?: ReportFormatCode, surveillanceStartHour?: number);
}
