import { LongTuple } from '../common/LongTuple';
export declare class AccountSettings {
    retentionDays: number;
    objectColors: LongTuple[];
    ruleColor: number;
    maskColor: number;
    constructor(retentionDays?: number, objectColors?: LongTuple[], ruleColor?: number, maskColor?: number);
}
