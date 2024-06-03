import { LongTuple } from '../common/LongTuple';
export declare class AccountSettings {
    retentionDays: number;
    objectColors: LongTuple[];
    ruleColor: number;
    maskColor: number;
    enableAnomalyByDefault: boolean;
    dateFormat: string;
    dateTimeFormat: string;
    playerSourceUri: string;
    eventClipLengthSec: number;
    constructor(retentionDays?: number, objectColors?: LongTuple[], ruleColor?: number, maskColor?: number, enableAnomalyByDefault?: boolean, dateFormat?: string, dateTimeFormat?: string, playerSourceUri?: string, eventClipLengthSec?: number);
}
