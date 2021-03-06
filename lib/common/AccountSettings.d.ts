import { LongTuple } from '../common/LongTuple';
export declare class AccountSettings {
    retentionDays: number;
    objectColors: LongTuple[];
    ruleColor: number;
    maskColor: number;
    enableAnomalyByDefault: boolean;
    dateFormat: string;
    dateTimeFormat: string;
    constructor(retentionDays?: number, objectColors?: LongTuple[], ruleColor?: number, maskColor?: number, enableAnomalyByDefault?: boolean, dateFormat?: string, dateTimeFormat?: string);
}
