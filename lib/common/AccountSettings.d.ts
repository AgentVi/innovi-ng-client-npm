import { LongTuple } from '../common/LongTuple';
export declare class AccountSettings {
    retentionDays: number;
    objectColors: LongTuple[];
    ruleColor: number;
    maskColor: number;
    enableAnomalyByDefault: boolean;
    constructor(retentionDays?: number, objectColors?: LongTuple[], ruleColor?: number, maskColor?: number, enableAnomalyByDefault?: boolean);
}
