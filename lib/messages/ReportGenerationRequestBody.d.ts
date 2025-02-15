import { TimeUnitCode } from '../enums/TimeUnitCode';
import { ReportDataTypeCode } from '../enums/ReportDataTypeCode';
import { ReportFormatCode } from '../enums/ReportFormatCode';
import { ReportTypeCode } from '../enums/ReportTypeCode';
export declare class ReportGenerationRequestBody {
    sensorIds: string[];
    folderIds: string[];
    from: number;
    to: number;
    reportType: ReportTypeCode;
    aggregationType: TimeUnitCode;
    dataType: ReportDataTypeCode;
    reportFormat: ReportFormatCode;
    surveillanceStartHour: number;
    constructor(sensorIds?: string[], folderIds?: string[], from?: number, to?: number, reportType?: ReportTypeCode, aggregationType?: TimeUnitCode, dataType?: ReportDataTypeCode, reportFormat?: ReportFormatCode, surveillanceStartHour?: number);
}
